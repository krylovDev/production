import type {
  StateSchema,
  ThunkConfig,
} from './config/StateSchema';
import StoreProvider from './UI/StoreProvider';

export {
  createReduxStore,
  AppDispatch,
} from './config/store';

export {
  StoreProvider,
  StateSchema,
  ThunkConfig,
};
