import { connect } from "react-redux"
import { useEffect } from "react"
import { totalSet, estimatedCompletionTimeSet } from "../store/windowEstimatorSlice"

const Overview = (props) => {

    // Window count per floor
    let numberOfStandard = 0
    let numberOfFrench = 0
    let numberOfSkylights = 0
    let numberOfLarge = 0
    // Total price for each window type across all floors
    let standardTotal = 0
    let frenchTotal = 0
    let skylightsTotal = 0
    let largeTotal = 0
    // Total estimated time for each window type across all floors
    let totalStandardTime = 0
    let totalFrenchTime = 0
    let totalSkylihgtTime = 0
    let totalLargeTime = 0
    // The percentage of time added
    let extraTime = 1

    for (let i = 0; i < props.floors.length; i++) {
        const floor = props.floors[i];
        // Sets totals for window type for each floor
        numberOfStandard = numberOfStandard + floor.standardCount
        numberOfFrench = numberOfFrench + floor.frenchCount
        numberOfSkylights = numberOfSkylights + floor.skylightCount
        numberOfLarge = numberOfLarge + floor.largeCount
        // Sets times for window for each floor
        totalStandardTime = totalStandardTime + (floor.standardCount * props.timePerStandard) * extraTime
        totalFrenchTime = totalFrenchTime + ((floor.frenchCount * props.timePerFrench) * extraTime)
        totalSkylihgtTime = totalSkylihgtTime + ((floor.skylightCount * props.timePerSkylight) * extraTime)
        totalLargeTime = totalLargeTime + ((floor.largeCount * props.timePerLarge) * extraTime)
        // Increases time for every floor above floor 1
        extraTime += .5
    }

    // Sets total price for each window type across all floors
    standardTotal = numberOfStandard * props.pricePerStandard
    frenchTotal = numberOfFrench * props.pricePerFrench
    skylightsTotal = numberOfSkylights * props.pricePerSkylight
    largeTotal = numberOfLarge * props.pricePerLarge

    function timeConvert(n) {
        let num = n;
        let hours = (num / 60);
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);
        return rhours + ':' + rminutes;
    }

    function calcTotal(a, b, c, d) {
        if (!props.interior || !props.exterior) {
            return (a + b + c + d ) / 2
        }
        return a + b + c + d
    }

    useEffect(() => {
        props.totalSet(calcTotal(standardTotal, frenchTotal, skylightsTotal, largeTotal))
        props.estimatedCompletionTimeSet(timeConvert(calcTotal(totalStandardTime, totalFrenchTime, totalSkylihgtTime, totalLargeTime)))
    }, [
        props.pricePerStandard,
        props.pricePerFrench,
        props.pricePerSkylight,
        props.pricePerLarge,
        props.floors,
        props.interior,
        props.exterior
    ])


    return (
        <div className='overview'>
            <h3>Overview</h3>
            <div className='overview__items'>
                <label>Total:</label>
                <span>${props.total}</span>
                <label>Estimated Completion Time:</label>
                <span>{props.estimatedCompletionTime}</span>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        total: state.total,
        estimatedCompletionTime: state.estimatedCompletionTime,
        pricePerStandard: state.pricePerStandard,
        pricePerFrench: state.pricePerFrench,
        pricePerSkylight: state.pricePerSkylight,
        pricePerLarge: state.pricePerLarge,
        floors: state.floors,
        timePerStandard: state.timePerStandard,
        timePerFrench: state.timePerFrench,
        timePerSkylight: state.timePerSkylight,
        timePerLarge: state.timePerLarge,
        interior: state.interior,
        exterior: state.exterior
    }
}

function mapDispatchToProps(dispatch) {
    return {
        totalSet: (total) => dispatch(totalSet(total)),
        estimatedCompletionTimeSet: (time) => dispatch(estimatedCompletionTimeSet(time))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview)