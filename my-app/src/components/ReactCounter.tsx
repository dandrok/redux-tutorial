import { useState } from "react"


export const ReactCounter = () => {
const [count, setCount] = useState<number>(0)





    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>
                count
            </button>
            <button onClick={() => setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0 )}>
                decrement
            </button>
            <button onClick={() => setCount(0)}>
                reset
            </button>
            <p>{count}</p>
        </div>
    )
}