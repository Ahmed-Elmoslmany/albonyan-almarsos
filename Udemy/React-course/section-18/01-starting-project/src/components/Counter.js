import { useSelector, useDispatch } from 'react-redux';
import {conterActions} from '../store/counter'
import classes from './Counter.module.css';



const Counter = () => {

  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const show = useSelector(state => state.showCounter)

  const increamentHandler = () => {
    dispatch(conterActions.increment())
  }

  const decreamentHandler = () => {
    dispatch(conterActions.decrement())
  }
  const toggleCounterHandler = () => {
   dispatch(conterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increamentHandler}>increament</button>
        <button onClick={decreamentHandler}>decreament</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
