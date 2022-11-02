import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {
  /*
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('success login', async () => {
    const userValue = { username: '123', id: '123' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const action = loginByUsername({ username: '123', password: '123' });
	  const result = await action(dispatch, getState, undefined);
    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    // dispatch вызвался 3 раза
	  expect(dispatch).toHaveBeenCalledTimes(3);
    // Запрос отправился
    expect(mockedAxios.post).toHaveBeenCalled();
    // Статус fulfilled
    expect(result.meta.requestStatus).toBe('fulfilled');
    // В payload приходит пользователь
    expect(result.payload).toEqual(userValue);
  });

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const action = loginByUsername({ username: '123', password: '123' });
    const result = await action(dispatch, getState, undefined);
    // dispatch вызвался 2 раза
    expect(dispatch).toHaveBeenCalledTimes(2);
    // Запрос отправился
    expect(mockedAxios.post).toHaveBeenCalled();
    // Статус fulfilled
    expect(result.meta.requestStatus).toBe('rejected');
    // В payload приходит ошибка
    expect(result.payload).toBe('Неправильный логин или пароль');
  });
  */

  test('success login', async () => {
    const userValue = { username: '123', id: '123' };
    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    // dispatch вызвался 3 раза
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    // Запрос отправился
    expect(thunk.api.post).toHaveBeenCalled();
    // Статус fulfilled
    expect(result.meta.requestStatus).toBe('fulfilled');
    // В payload приходит пользователь
    expect(result.payload).toEqual(userValue);
  });

  test('error login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ username: '123', password: '123' });

    // dispatch вызвался 2 раза
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    // Запрос отправился
    expect(thunk.api.post).toHaveBeenCalled();
    // Статус fulfilled
    expect(result.meta.requestStatus).toBe('rejected');
    // В payload приходит ошибка
    expect(result.payload).toBe('Неправильный логин или пароль');
  });
});
