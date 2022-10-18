import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
  test('возвращается ошибка', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'Error',
      },
    };
    expect(getLoginError(state as StateSchema)).toEqual('Error');
  });
  test('с пустым стейтом', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
