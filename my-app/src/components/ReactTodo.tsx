import { useState } from "react"

export const ReactTodo = () => {

    const [inputValue, setInputValue] = useState('firstItem')
    const [list, setList] = useState<Array<string>>([])


const handleSubmit = (e:any) => {
    e.preventDefault()

    setList((prevValue) => [...prevValue, inputValue])

    setInputValue('')
}

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    todo
                    <input type="text" name="name" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <div>
                {list.map(el => (<div>
                    <p>{el}</p>
                </div>))}
            </div>
        </div>
    )
}