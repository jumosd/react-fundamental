import { createStore } from "redux"


const CounterReducerStore = (state = { count: 0, showCounter: true }, action) => {
    if (action.type === 'increment') {
        return {
            ...state,
            count: state.count + 1,
        }
    }
    if (action.type === 'decrement') {
        return {
            ...state,
            count: state.count - 1,
        }
    }

    if (action.type === 'increase') {
        return {
            ...state,
            count: state.count + action.amount
        }
    }

    if (action.type === "togle") {
        return {
            ...state,
            showCounter: !state.showCounter
        }
    }


    return state
}

const store = createStore(CounterReducerStore)

export default store