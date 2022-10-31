import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../services/fetchProfileData/getProfileData';
import {
  Profile,
  ProfileSchema,
} from '../types/Profile.type';

const initialState: ProfileSchema = {
  data: undefined,
  readonly: true,
  isLoading: false,
  error: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (
      state,
      action: PayloadAction<boolean>,
    ) => {
      state.readonly = action.payload;
    },
    updateProfile: (
      state,
      action: PayloadAction<Profile>,
    ) => {
      state.form = {
        ...state.data,
        ...action.payload,
      };
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
    },
  },
  extraReducers: (builder) => {
    builder
      /* Получение данных о пользователе */
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.form = action.payload;
        },
      )
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      /* Обновление данных о пользователе */
      .addCase(updateProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        updateProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.form = action.payload;
          state.readonly = true;
        },
      )
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
