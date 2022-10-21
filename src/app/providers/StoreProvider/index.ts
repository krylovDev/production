import type { StateSchema } from './config/StateSchema';
import StoreProvider from './UI/StoreProvider';

export {
  createReduxStore,
  AppDispatch,
} from './config/store';

export {
  StoreProvider,
  StateSchema,
};
