import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'

import store from '../store/index'

const Counter = () => {
  const counter = useSelector((state) => state.count)
  const showCounter = useSelector((state) => state.showCounter)
  const dispatch = useDispatch()

  const IncrementCounterHandler = () => {
    dispatch({ type: "increment" })
  }

  const decrementCounterHandler = () => {
    dispatch({ type: "decrement" })
  }

  const increase10Handler = () => {
    dispatch({ type: "increase", amount: 10 })
  }

  const togleHandler = () => {
    dispatch({ type: "togle" })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}

      <button onClick={IncrementCounterHandler}>증가 카운터</button>
      <button onClick={increase10Handler}>10 증가 카운터</button>
      <button onClick={decrementCounterHandler}>감소 카운터</button>
      <button onClick={togleHandler}>토글 핸들러</button>
    </main >
  );
};

export default Counter;
