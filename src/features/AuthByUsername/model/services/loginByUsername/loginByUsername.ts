import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { USER_KEY } from 'shared/constants/localStorage';

interface loginByUsernameProps {
  username: string
  password: string
}
/* User - то, что возвращаем
* loginByUsernameProps - то, что ожидаем на вход
 */

//  dispatch #1
export const loginByUsername = createAsyncThunk<
  User,
  loginByUsernameProps,
  ThunkConfig<string>
  >(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
      const {
        extra,
        dispatch,
        rejectWithValue,
      } = thunkAPI;
      try {
        const response = await extra.api.post<User>('/login', authData);

        if (!response.data) {
          throw new Error();
        }
        // Записываем ключ в localStorage
        localStorage.setItem(USER_KEY, JSON.stringify(response.data));
        // Записываем пользователя в authData //  dispatch #2
        dispatch(userActions.setAuthData(response.data));
        //  dispatch #3
        return response.data;
      } catch (e) {
        console.log(e);
        //  dispatch #2
        return rejectWithValue('Неправильный логин или пароль');
      }
    },
  );
