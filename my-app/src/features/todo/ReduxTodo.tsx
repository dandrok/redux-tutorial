import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { addNewItem, deleteAllItems, deleteItem, doneItem } from "./todoSlice"
import { useState } from "react"

export const ReduxTodo = () => {

    const [value, setValue] = useState<string>('')

    const list = useSelector((state:RootState) => state.todoList.items)
    const dispatch = useDispatch()


    const customValueHandler = (e:any) => {
        setValue(e.target.value)
    }

console.log(list)

    return (
        <div>
            <form action="">
                <input value={value} type="text" onChange={customValueHandler}/>
                <button onClick={(e) => {
                    e.preventDefault()
                    dispatch(addNewItem(value))
                    setValue('')
                    }
                    }>add new</button>
            </form>
                <button onClick={() => dispatch(deleteAllItems())}>reset list</button>
            <div>
                {list.map((item,i) => {
                    const deleteHandler = () => {
                        dispatch(deleteItem(item.id))
                    }
                    const doneHandler = () => {
                        dispatch(doneItem(item.id))
                    }
                    return (
                        <div key={item.id} style={{display: 'flex'}}>
                            { item.done ? <s>{item.name}</s> : <p>{item.name}</p>}
                            <div>
                                <button onClick={deleteHandler}>DELETE</button>
                                <button onClick={doneHandler}>DONE</button>
                            </div>
                        </div>
                )})}
            </div>
        </div>
    )
}