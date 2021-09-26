import { connect } from "react-redux"
import { countSet } from "../store/windowEstimatorSlice"

const FloorCounter = (props) => {

    return (
        <div className='counter'>
            <h3>Floor {props.floorNumber}</h3>
            <div className='counter__items'>
                <label>Standard</label>
                <div className='counter__button-container'>
                    <button onClick={() => {
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
                        if (e.target.value === '') {e.target.value = 0}
                        if (isNaN(e.target.value)) { return }
                        e.target.value = parseInt(e.target.value)
                        props.countSet(props.floorNumber, {
                            ...props.floors[props.floorNumber - 1],
                            standardCount: parseInt(e.target.value)
                        })
                    }}
                />
                <div className='counter__button-container'>
                    <button onClick={() => {
                            props.countSet(props.floorNumber, {
                                ...props.floors[props.floorNumber - 1],
                                standardCount: props.floors[props.floorNumber - 1].standardCount + 1
                            })
                        }}
                    >
                        +
                    </button>
                </div>

                {/* ------------------------------------------- */}

                <label>French Pane (Sets of 6-9)</label>
                <div className='counter__button-container'>
                    <button onClick={() => {
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
                    <button onClick={() => {
                        props.countSet(props.floorNumber, {
                            ...props.floors[props.floorNumber - 1],
                            frenchCount: props.floors[props.floorNumber - 1].frenchCount + 1
                        })
                    }}
                    >
                        +
                    </button>
                </div>

                {/* ------------------------------------------- */}

                <label>Skylight</label>
                <div className='counter__button-container'>
                    <button onClick={() => {
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
                    <button onClick={() => {
                        props.countSet(props.floorNumber, {
                            ...props.floors[props.floorNumber - 1],
                            skylightCount: props.floors[props.floorNumber - 1].skylightCount + 1
                        })
                    }}
                    >
                        +
                    </button>
                </div>

                {/* ------------------------------------------- */}

                <label>Large (8ft +)</label>
                <div className='counter__button-container'>
                    <button onClick={() => {
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
                    <button onClick={() => {
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