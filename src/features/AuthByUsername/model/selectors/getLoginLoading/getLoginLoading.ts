import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
