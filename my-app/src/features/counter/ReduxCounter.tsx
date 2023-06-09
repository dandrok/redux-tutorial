import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { decrement, increment, incrementByValue, reset, newValue} from "./counterSlice"
import { useEffect, useState } from "react"


export const ReduxCounter = () => {

    const [value, setValue] = useState<string | number>(0)

    // const count = useSelector((state: RootState) => state.counter.value)

    const [data, setData] = useState()

    
    const dispatch = useDispatch()

    const customValueHandler = (e: any) => {

        setValue(e.target.value)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://run.mocky.io/v3/fd52f86d-6df7-467b-9081-16368fa389d5')
                const jsonData = await res.json()
                dispatch(newValue(jsonData.value))
            } catch (err) {
                console.error(err)
            }
        }
        fetchData()
    },[])


    return (
        <div>
            <button onClick={() => dispatch(increment())}>redux increment</button>
            <button onClick={() => console.log('dupa')}>fdsa</button>
            <button onClick={() => dispatch(decrement())}>redux decrement</button>
            <button onClick={() => dispatch(reset())}>redux reset</button>
            <form >
                <input value={value} type="number" onChange={customValueHandler} />
                <button onClick={(e) => {
                    e.preventDefault()
                    dispatch(incrementByValue(Number(value)))
                    setValue('')
                }
                }>by value</button>
            </form>
            {/* <p>{count}</p> */}
        </div>
    )
}