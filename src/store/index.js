import { createStore } from "redux"
import { configureStore, createSlice } from "@reduxjs/toolkit"

const initialState = { counter: 0, showCounter: true }
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }

})
const store = configureStore({
    reducer: counterSlice.reducer
})

export const couterActions = counterSlice.actions





// const CounterReducerStore = (state = { count: 0, showCounter: true }, action) => {
//     if (action.type === 'increment') {
//         return {
//             ...state,
//             count: state.count + 1,
//         }
//     }
//     if (action.type === 'decrement') {
//         return {
//             ...state,
//             count: state.count - 1,
//         }
//     }

//     if (action.type === 'increase') {
//         return {
//             ...state,
//             count: state.count + action.amount
//         }
//     }

//     if (action.type === "togle") {
//         return {
//             ...state,
//             showCounter: !state.showCounter
//         }
//     }

//     return state
// }

// const store = createStore(CounterReducerStore)

export default store
