import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CounterSLice = {
    value: number
};

const initialState: CounterSLice = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value++
        },
        decrement: (state) => {
            state.value > 0 && state.value--
        },
        incrementByValue: (state, actions: PayloadAction<number>) => {
            state.value += actions.payload
        },
        reset: (state) => {
            state.value = 0
        },
        newValue: (state,action: PayloadAction<number>) => {
            state.value = action.payload
        }
    }
})

export const { increment, decrement, reset, incrementByValue, newValue} = counterSlice.actions

export default counterSlice.reducer