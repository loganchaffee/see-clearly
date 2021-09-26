import React from 'react'
import { connect } from 'react-redux'

import Overview from './components/Overview'
import Details from './components/Details'
import FloorCounter from './components/FloorCounter'
import './styles/WindowEstimator.css'


const WindowEstimator = (props) => {
    
    return (
        <div className='WindowEstimator'>
            <h1>Window Cleaning</h1>

            <Overview />

            <Details />

            {props.numberOfFloors > 0 && <FloorCounter floorNumber={1} />}
            {props.numberOfFloors > 1 && <FloorCounter floorNumber={2} />}
            {props.numberOfFloors > 2 && <FloorCounter floorNumber={3} />}
            {props.numberOfFloors > 3 && <FloorCounter floorNumber={4} />}

        </div>
    )
}

function mapStateToProps(state) {
    return {
        numberOfFloors: state.numberOfFloors
    }
}

export default connect(mapStateToProps)(WindowEstimator)




