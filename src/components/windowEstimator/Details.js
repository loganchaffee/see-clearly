import { connect } from "react-redux"
import CurrencyInput from 'react-currency-input-field'
import { 
    interiorToggled, 
    exteriorToggled, 
    numberOfFloorsSet,
    tallestLadderNeededSet,
    pricePerStandardSet,
    pricePerFrenchSet,
    pricePerSkylightSet,
    pricePerLargeSet,
    countSet
} from "../../store/windowEstimatorSlice"

const Details = (props) => {

    if (!props.interior && !props.exterior) {
        props.exteriorToggled()
    }

    for (let i = 0; i < props.floors.length; i++) {
        const floor = props.floors[i];
        if (floor.standardCount < 0) {
            console.log('too low');
            props.countSet(floor.floorNumber, {...floor, standardCount: 0})
        }
        if (floor.frenchCount < 0) {
            console.log('too low');
            props.countSet(floor.floorNumber, { ...floor, frenchCount: 0 })
        }
        if (floor.skylightCount < 0) {
            console.log('too low');
            props.countSet(floor.floorNumber, { ...floor, skylightCount: 0 })
        }
        if (floor.largeCount < 0) {
            console.log('too low');
            props.countSet(floor.floorNumber, { ...floor, largeCount: 0 })
        }
    }

    return (
        <div className='details'>
            <h3>Details</h3>
            <div className='details__items'>
                <div className="details__row">
                    <div className='interior-exterior'>
                        <label>Interior</label>
                        <input 
                            className='interior-exterior__checkbox'
                            type='checkbox'
                            checked={props.interior}
                            onChange={() => {
                                props.interiorToggled()
                            }}
                        />
                    </div>
                    <div className='interior-exterior'>
                        <label>Exterior</label>
                        <input
                            className='interior-exterior__checkbox'
                            type='checkbox'
                            checked={props.exterior}
                            onChange={(e) => {
                                props.exteriorToggled()
                            }}
                        />
                    </div>
                </div>

                <div className='details__row'>
                    <label>Floors:</label>
                    <select
                        type='select'
                        value={props.numberOfFloors}
                        onChange={(e) => {
                            props.numberOfFloorsSet(e.target.value)
                        }}
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                    </select>
                </div>

                <div className='details__row'>
                    <label>Tallest Ladder:</label>
                    <select
                        type='select'
                        value={props.tallestLadderNeeded}
                        onChange={(e) => {
                            props.tallestLadderNeededSet(e.target.value)
                        }}
                    >
                        <option value='24ft'>24ft</option>
                        <option value='28ft'>28ft</option>
                        <option value='32ft'>32ft</option>
                        <option value='40ft'>40ft</option>
                    </select>
                </div>

                <div className='details__row'>
                    <label>Standard Price:</label>
                    <CurrencyInput
                        className='details__price-input'
                        id="pricePerStandardInput"
                        name="pricePerStandardInput"
                        placeholder="Please enter a number"
                        defaultValue={parseFloat(props.pricePerStandard).toFixed(2)}
                        decimalsLimit={2}
                        onValueChange={(value) => props.priceperStandardSet(parseFloat(value))}
                    />
                </div>

                <div className='details__row'>
                    <label>French:</label>
                    <CurrencyInput 
                        className='details__price-input'
                        id="pricePerFrenchInput"
                        name="pricePerFrenchInput"
                        placeholder="Please enter a number"
                        defaultValue={parseFloat(props.pricePerFrench).toFixed(2)}
                        decimalsLimit={2}
                        onValueChange={(value) => props.pricePerFrenchSet(parseFloat(value))}
                    />
                </div>

                <div className='details__row'>
                    <label>Skylight:</label>
                    <CurrencyInput
                        className='details__price-input'
                        id="pricePerSkylightInput"
                        name="pricePerSkylightInput"
                        placeholder="Please enter a number"
                        defaultValue={parseFloat(props.pricePerSkylight).toFixed(2)}
                        decimalsLimit={2}
                        onValueChange={(value) => props.pricePerSkylightSet(parseFloat(value))}
                    />
                </div>

                <div className="details__row">
                    <label>Large:</label>
                    <CurrencyInput
                        className='details__price-input'
                        id="pricePerLargeInput"
                        name="pricePerLargeInput"
                        placeholder="Please enter a number"
                        defaultValue={parseFloat(props.pricePerLarge).toFixed(2)}
                        decimalsLimit={2}
                        onValueChange={(value) => props.pricePerLargeSet(parseFloat(value))}
                    />
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        interior: state.interior,
        exterior: state.exterior,
        numberOfFloors: state.numberOfFloors,
        tallestLadderNeeded: state.tallestLadderNeeded,
        pricePerStandard: state.pricePerStandard,
        pricePerFrench: state.pricePerFrench,
        pricePerSkylight: state.pricePerSkylight,
        pricePerLarge: state.pricePerLarge,
        floors: state.floors
    }
}

function mapDispatchToProps(dispatch) {
    return {
        interiorToggled: () => dispatch(interiorToggled()),
        exteriorToggled: () => dispatch(exteriorToggled()),
        numberOfFloorsSet: (num) => dispatch(numberOfFloorsSet(num)),
        tallestLadderNeededSet: (size) => dispatch(tallestLadderNeededSet(size)),
        priceperStandardSet: (price) => dispatch(pricePerStandardSet(price)),
        pricePerFrenchSet: (price) => dispatch(pricePerFrenchSet(price)),
        pricePerSkylightSet: (price) => dispatch(pricePerSkylightSet(price)),
        pricePerLargeSet: (price) => dispatch(pricePerLargeSet(price)),
        countSet: (floorNumber, floor) => dispatch(countSet({ floorNumber, floor }))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)