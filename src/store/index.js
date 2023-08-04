import { createStore } from "redux"


const CounterReducerStore = (state = { count: 0, showCounter: true }, action) => {
    if (action.type === 'increment') {
        return {
            count: state.count + 1
        }
    }
    if (action.type === 'decrement') {
        return {
            count: state.count - 1
        }
    }

    if (action.type === 'increase') {
        return {
            count: state.count + action.amount,
            showCounter: state.showCounter
        }
    }

    return state
}

const store = createStore(CounterReducerStore)

export default store