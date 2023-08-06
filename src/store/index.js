import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSliceState = {
  counter: 0,
  showCounter: true
}

const counterSlice = createSlice({
  name: "counter",
  initialState: counterSliceState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--
    },
    increase(state, action) {
      state.counter += action.payload
    },
    showCounter(state) {
      state.showCounter = !state.showCounter
    }
  }
})

const authSlice = createSlice({
  name: "isAuth",
  initialState: false,
  reducers: {
    login(state) {
      return state = true;
    },

    logout(state) {
      return state = false
    }
  }
})


const store = configureStore({
  reducer: {
    counterSlice: counterSlice.reducer,
    isAuth: authSlice.reducer
  }
})

export const counterActions = counterSlice.actions
export const isAuthActions = authSlice.actions

export default store