import { connect } from "react-redux"
import { countSet } from "../../store/windowEstimatorSlice"

const FloorCounter = (props) => {

    return (
        <div className='counter'>
            <h3>Floor {props.floorNumber}</h3>
            <div className='counter__items'>
            
                <div className='counter__row'>
                    <label>Standard</label>
                    <div className='counter__button-container'>
                        <button className='counter__button' onClick={() => {
                            props.countSet(props.floorNumber, {
                                ...props.floors[props.floorNumber - 1],
                                standardCount: props.floors[props.floorNumber - 1].standardCount - 1
                            })
                        }}
                        >
                            -
                        </button>
                    </div>
                    <input
                        type='number'
                        value={props.floors[props.floorNumber - 1].standardCount}
                        onChange={(e) => {
                            if (e.target.value === '') { e.target.value = 0 }
                            if (isNaN(e.target.value)) { return }
                            e.target.value = parseInt(e.target.value)
                            props.countSet(props.floorNumber, {
                                ...props.floors[props.floorNumber - 1],
                                standardCount: parseInt(e.target.value)
                            })
                        }}
                    />
                    <div className='counter__button-container'>
                        <button className='counter__button' onClick={() => {
                            props.countSet(props.floorNumber, {
                                ...props.floors[props.floorNumber - 1],
                                standardCount: props.floors[props.floorNumber - 1].standardCount + 1
                            })
                        }}
                        >
                            +
                        </button>
                    </div>
                </div>
                    

                {/* ------------------------------------------- */}
                <div className='counter__row'>
                    <label>French Set</label>
                    <div className='counter__button-container'>
                        <button className='counter__button' onClick={() => {
                            props.countSet(props.floorNumber, {
                                ...props.floors[props.floorNumber - 1],
                                frenchCount: props.floors[props.floorNumber - 1].frenchCount - 1
                            })
                        }}
                        >
                            -
                        </button>
                    </div>
                    <input
                        type='number'
                        value={props.floors[props.floorNumber - 1].frenchCount}
                        onChange={(e) => {
                            if (e.target.value === '') { e.target.value = 0 }
                            if (isNaN(e.target.value)) { return }
                            e.target.value = parseInt(e.target.value)
                            props.countSet(props.floorNumber, {
                                ...props.floors[props.floorNumber - 1],
                                frenchCount: parseInt(e.target.value)
                            })
                        }}
                    />
                    <div className='counter__button-container'>
                        <button className='counter__button' onClick={() => {
                            props.countSet(props.floorNumber, {
                                ...props.floors[props.floorNumber - 1],
                                frenchCount: props.floors[props.floorNumber - 1].frenchCount + 1
                            })
                        }}
                        >
                            +
                        </button>
                    </div>
                </div>

                {/* ------------------------------------------- */}
                <div className='counter__row'>
                    <label>Skylight</label>
                    <div className='counter__button-container'>
                        <button className='counter__button' onClick={() => {
                            props.countSet(props.floorNumber, {
                                ...props.floors[props.floorNumber - 1],
                                skylightCount: props.floors[props.floorNumber - 1].skylightCount - 1
                            })
                        }}
                        >
                            -
                        </button>
                    </div>
                    <input
                        type='number'
                        value={props.floors[props.floorNumber - 1].skylightCount}
                        onChange={(e) => {
                            if (e.target.value === '') { e.target.value = 0 }
                            if (isNaN(e.target.value)) { return }
                            e.target.value = parseInt(e.target.value)
                            props.countSet(props.floorNumber, {
                                ...props.floors[props.floorNumber - 1],
                                skylightCount: parseInt(e.target.value)
                            })
                        }}
                    />
                    <div className='counter__button-container'>
                        <button className='counter__button' onClick={() => {
                            props.countSet(props.floorNumber, {
                                ...props.floors[props.floorNumber - 1],
                                skylightCount: props.floors[props.floorNumber - 1].skylightCount + 1
                            })
                        }}
                        >
                            +
                        </button>
                    </div>
                </div>    
                    
                {/* ------------------------------------------- */}
                <div className='counter__row'>
                    <label>Large</label>
                    <div className='counter__button-container'>
                        <button className='counter__button' onClick={() => {
                            props.countSet(props.floorNumber, {
                                ...props.floors[props.floorNumber - 1],
                                largeCount: props.floors[props.floorNumber - 1].largeCount - 1
                            })
                        }}
                        >
                            -
                        </button>
                    </div>
                    <input
                        type='number'
                        value={props.floors[props.floorNumber - 1].largeCount}
                        onChange={(e) => {
                            if (e.target.value === '') { e.target.value = 0 }
                            if (isNaN(e.target.value)) { return }
                            e.target.value = parseInt(e.target.value)
                            props.countSet(props.floorNumber, {
                                ...props.floors[props.floorNumber - 1],
                                largeCount: parseInt(e.target.value)
                            })
                        }}
                    />
                    <div className='counter__button-container'>
                        <button className='counter__button' onClick={() => {
                            props.countSet(props.floorNumber, {
                                ...props.floors[props.floorNumber - 1],
                                largeCount: props.floors[props.floorNumber - 1].largeCount + 1
                            })
                        }}
                        >
                            +
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        numberOfFloors: state.numberOfFloors,
        floors: state.floors
    }
}

function mapDispatchToProps(dispatch) {
    return {
        countSet: (floorNumber, floor) => dispatch(countSet({floorNumber, floor})),
        // standardCountDecremented: (floorNumber) => dispatch(standardCountDecremented(floorNumber)),
        // standardCountSet: (floor, newCount) => dispatch(standardCountSet({floor, newCount}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FloorCounter)