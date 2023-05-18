import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { decrement, increment, reset } from "./counterSlice"


export const ReduxCounter = () => {

    const count = useSelector((state:RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(increment())}>redux count</button>
            <button onClick={() => dispatch(decrement())}>redux decrement</button>
            <button onClick={() => dispatch(reset())}>redux reset</button>
            <p>{count}</p>
        </div>
    )
}