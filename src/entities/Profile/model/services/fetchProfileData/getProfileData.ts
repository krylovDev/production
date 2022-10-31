import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/Profile.type';

//  dispatch #1
export const fetchProfileData = createAsyncThunk<
	Profile,
	void,
	ThunkConfig<string>
	>(
	  'profile/fetchProfileData',
	  async (_, thunkAPI) => {
	    const {
	      extra,
	      rejectWithValue,
	    } = thunkAPI;
	    try {
	      const response = await extra.api.get<Profile>('/profile');
	      return response.data;
	    } catch (e) {
	      console.log(e);
	      //  dispatch #2
	      return rejectWithValue('Неправильный логин или пароль');
	    }
	  },
	);
