import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { couterActions } from '../store/index';
import store from '../store/index'

const Counter = () => {
  const counter = useSelector((state) => state.counter)
  const showCounter = useSelector((state) => state.showCounter)
  const dispatch = useDispatch()

  const IncrementCounterHandler = () => {
    dispatch(couterActions.increment())
  }

  const decrementCounterHandler = () => {
    dispatch(couterActions.decrement())
  }

  const increase10Handler = () => {
    dispatch(couterActions.increase(10))
  }

  const togleHandler = () => {
    dispatch(couterActions.toggleCounter())
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
