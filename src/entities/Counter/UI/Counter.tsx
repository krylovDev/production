import { useDispatch, useSelector } from 'react-redux';
import Button from 'shared/UI/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const dispatch = useDispatch();
  const countValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1 data-testid="counter-value">
        {countValue}
      </h1>
      <Button data-testid="increment-btn" onClick={increment}>increment</Button>
      <Button data-testid="decrement-btn" onClick={decrement}>decrement</Button>
    </div>
  );
};
