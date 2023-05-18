import { createSlice } from "@reduxjs/toolkit";

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
            state.value = state.value + 1
        },
        decrement: (state) => {
            state.value = state.value > 0 ? state.value - 1 : 0
        },
        reset: (state) => {
            state.value = 0
        }
    }
})

export const {increment, decrement, reset} = counterSlice.actions

export default counterSlice.reducer