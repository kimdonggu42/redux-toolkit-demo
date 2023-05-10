import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseByOne, decreaseByOne, increaseByFive, toggle } from '../redux/slice/counterSlice';

function Counter() {
  const dispatch = useDispatch();
  const counterState = useSelector((state) => state.counterSlice);

  const incrementHandler = () => {
    dispatch(increaseByOne());
  }

  const increaseHandler = () => {
    dispatch(increaseByFive(5));
  }

  const decrementHandler = () => {
    dispatch(decreaseByOne());
  }

  const toggleCounterHandler = () => {
    dispatch(toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counterState.isCountNum ? <div className={classes.value}>{counterState.countNum}</div> : null}
      <div>
        <button onClick={incrementHandler}>+1</button>
        <button onClick={increaseHandler}>+5</button>
        <button onClick={decrementHandler}>-1</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
