import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";


type ToDoObject = {
    name: string,
    id: string,
    done: boolean
}

export type TodoState = {
    items: ToDoObject[]
}

const initialState: TodoState = {
    items: []
}


export const totoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addNewItem: {
            reducer: (state, action: PayloadAction<ToDoObject>) => {
                state.items.push(action.payload);
          },
            prepare: (name: string) => {
                return { payload: { id: nanoid(), name, done:false } };
          },
        },
        deleteAllItems: (state) => {
            state.items = []
        },
        deleteItem: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter((item) => item.id !== itemId);
        },
        doneItem: (state, action) => {
            const itemId = action.payload;
            const item = state.items.find((item) => item.id === itemId);
            if (item) {
                item.done = !item.done;
            }
        }
      
    },
})

export const { addNewItem, deleteAllItems, deleteItem, doneItem } = totoSlice.actions

export default totoSlice.reducer