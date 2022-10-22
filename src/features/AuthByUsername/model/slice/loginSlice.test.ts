import { LoginSchema } from 'features/AuthByUsername';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  test('set username', () => {
    const state: DeepPartial<LoginSchema> = { username: '123' };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('123'),
    )).toStrictEqual({ username: '123' });
  });
  test('set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('123'),
    )).toStrictEqual({ password: '123' });
  });
});
