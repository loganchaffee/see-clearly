// Overview State
const [total, setTotal] = useState(0)
const [totalTime, setTotalTime] = useState(0)

// Details State
const [interior, setInterior] = useState(true)
const [exterior, setExterior] = useState(true)

if (!interior && !exterior) { setExterior(true) }

const [floors, setFloors] = useState(1)
const [pricePerStandard, setPricePerStandard] = useState(10)
const [pricePerSkylight, setPricePerSkylight] = useState(20)
const [pricePerLarge, setPricePerLarge] = useState(15)

// Count State
const [floor1, setFloor1] = useState({
    standardCount: 0,
    frenchCount: 0,
    skylightCount: 0,
    largeCount: 0
})
const [floor2, setFloor2] = useState({
    standardCount: 0,
    frenchCount: 0,
    skylightCount: 0,
    largeCount: 0
})
const [floor3, setFloor3] = useState({
    standardCount: 0,
    frenchCount: 0,
    skylightCount: 0,
    largeCount: 0
})
const [floor4, setFloor4] = useState({
    standardCount: 0,
    frenchCount: 0,
    skylightCount: 0,
    largeCount: 0
})
const [allFloors, setAllfloors] = useState([floor1, floor2, floor3, floor4])

if (floor1.standardCount < 0) { setFloor1({ ...floor1, standardCount: 0 }) }


// Update total price element on inputs change
useEffect(() => {
    getTotal()
}, [
    floor1,
    floor2,
    floor3,
    floor4,
    pricePerStandard,
    interior,
    exterior
])

// Count Functions
const decrementCount = (floor, property, method) => {
    method({
        ...floor,
        ...(property === 'standardCount' && { standardCount: floor.standardCount - 1 }),
        ...(property === 'frenchCount' && { frenchCount: floor.frenchCount - 1 }),
        ...(property === 'skylightCount' && { skylightCount: floor.skylightCount - 1 }),
        ...(property === 'largeCount' && { largeCount: floor.largeCount - 1 })
    })
}

const incrementCount = (floor, property, method) => {
    method({
        ...floor,
        ...(property === 'standardCount' && { standardCount: floor.standardCount + 1 }),
        ...(property === 'frenchCount' && { frenchCount: floor.frenchCount + 1 }),
        ...(property === 'skylightCount' && { skylightCount: floor.skylightCount + 1 }),
        ...(property === 'largeCount' && { largeCount: floor.largeCount + 1 })
    })
}

const getTotal = () => {
    const standardCount = floor1.standardCount + floor2.standardCount + floor3.standardCount + floor4.standardCount
    const frenchCount = floor1.frenchCount + floor2.frenchCount + floor3.frenchCount + floor4.frenchCount
    const skylightCount = floor1.skylightCount + floor2.skylightCount + floor3.skylightCount + floor4.skylightCount
    const largeCount = floor1.largeCount + floor2.largeCount + floor3.largeCount + floor4.largeCount
    const standardTotal = standardCount * pricePerStandard
    const frenchTotal = frenchCount * pricePerStandard * 1.5
    const skylightTotal = skylightCount * pricePerSkylight
    const largeTotal = largeCount * pricePerLarge
    setTotal(standardTotal + frenchTotal + skylightTotal + largeTotal)
}
