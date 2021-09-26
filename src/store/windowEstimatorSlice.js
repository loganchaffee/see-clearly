import {createSlice} from '@reduxjs/toolkit'

let initialState = {
    // Overview
    total: 777,
    estimatedCompletionTime: 0,
    // Details
    interior: true,
    exterior: true,
    numberOfFloors: 1,
    tallestLadderNeeded: '24ft',
    pricePerStandard: 10.00,
    pricePerFrench: 15.00,
    pricePerSkylight: 20.00,
    pricePerLarge: 15.00,
    // Times in minutes
    timePerStandard: 5,
    timePerFrench: 8,
    timePerSkylight: 15,
    timePerLarge: 8,
    // Counters
    floors: [
        {
            floorNumber: 1,
            standardCount: 0,
            frenchCount: 0,
            skylightCount: 0,
            largeCount: 0,
        },
        {
            floorNumber: 2,
            standardCount: 0,
            frenchCount: 0,
            skylightCount: 0,
            largeCount: 0,
        },
        {
            floorNumber: 3,
            standardCount: 0,
            frenchCount: 0,
            skylightCount: 0,
            largeCount: 0,
        },
        {
            floorNumber: 4,
            standardCount: 0,
            frenchCount: 0,
            skylightCount: 0,
            largeCount: 0,
        }
    ]
}

const windowEstimatorSlice = createSlice({
    name: 'windowEstimator',
    initialState: initialState,
    reducers: {
        countSet: (state, action) => {
            state.floors[action.payload.floorNumber - 1] = action.payload.floor
        },
        interiorToggled: (state) => {
            state.interior = !state.interior
        },
        exteriorToggled: (state) => {
            state.exterior = !state.exterior
        },
        numberOfFloorsSet: (state, action) => {
            state.numberOfFloors = action.payload
        },
        tallestLadderNeededSet: (state, action) => {
            state.tallestLadderNeeded = action.payload 
        },
        pricePerStandardSet: (state, action) => {
            state.pricePerStandard = action.payload
        },
        pricePerFrenchSet: (state, action) => {
            state.pricePerFrench = action.payload
        },
        pricePerSkylightSet: (state, action) => {
            state.pricePerSkylight = action.payload
        },
        pricePerLargeSet: (state, action) => {
            state.pricePerLarge = action.payload
        },
        totalSet: (state, action) => {
            state.total = action.payload
        },
        estimatedCompletionTimeSet: (state, action) => {
            state.estimatedCompletionTime = action.payload
        }
    }
})

export const {  
    countSet, 
    interiorToggled, 
    exteriorToggled,
    numberOfFloorsSet,
    tallestLadderNeededSet,
    pricePerStandardSet,
    pricePerFrenchSet,
    pricePerSkylightSet,
    pricePerLargeSet,
    totalSet,
    estimatedCompletionTimeSet,
} = windowEstimatorSlice.actions
export default windowEstimatorSlice.reducer;
