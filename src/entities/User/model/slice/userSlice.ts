import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_KEY } from 'shared/constants/localStorage';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
  _inited: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },

    isAuthData: (state) => {
      const user = localStorage.getItem(USER_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
      state._inited = true;
    },

    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
