import { createStore } from "redux"


const CounterReducerStore = (state = { count: 0, showCounter: true }, action) => {
    if (action.type === 'increment') {
        return {
            count: state.count + 1,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'decrement') {
        return {
            count: state.count - 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'increase') {
        return {
            count: state.count + action.amount,
            showCounter: state.showCounter
        }
    }

    if (action.type === "togle") {
        return {
            count: state.count,
            showCounter: !state.showCounter
        }
    }


    return state
}

const store = createStore(CounterReducerStore)

export default store