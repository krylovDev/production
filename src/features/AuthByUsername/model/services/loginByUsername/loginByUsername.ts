import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_KEY } from 'shared/constants/localStorage';

interface loginByUsernameProps {
  username: string
  password: string
}
/* User - то, что возвращаем
* loginByUsernameProps - то, что ожидаем на вход
 */

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, {rejectValue: string}>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);
      if (!response.data) {
        throw new Error();
      }
      // Записываем ключ в localStorage
      localStorage.setItem(USER_KEY, JSON.stringify(response.data));
      // Записываем пользователя в authData
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      console.error(e);
      return thunkAPI.rejectWithValue('Неправильный логин или пароль');
    }
  },
);
