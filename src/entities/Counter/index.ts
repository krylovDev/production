import { CounterSchema } from 'entities/Counter/model/types/counerSchema';
import { counterReducer } from './model/slice/counterSlice';
import { Counter } from './UI/Counter';

export {
  counterReducer,
  CounterSchema,
  Counter,
};
