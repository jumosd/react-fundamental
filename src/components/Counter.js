import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'

import store from '../store/index'

const Counter = () => {
  const counter = useSelector((state) => state.count)
  const dispatch = useDispatch()

  const IncrementCounterHandler = () => {
    dispatch({ type: "increment" })
  }
  const decrementCounterHandler = () => {
    dispatch({ type: "decrement" })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>

      <button onClick={IncrementCounterHandler}>증가 카운터</button>
      <button onClick={decrementCounterHandler}>감소 카운터</button>
    </main >
  );
};

export default Counter;
