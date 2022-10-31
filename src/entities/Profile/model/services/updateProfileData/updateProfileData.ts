import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { Profile } from '../../types/Profile.type';

//  dispatch #1
export const updateProfileData = createAsyncThunk<
	Profile,
	void,
	ThunkConfig<string>
	>(
	  'profile/updateProfileData',
	  async (_, thunkAPI) => {
	    const {
	      extra,
	      rejectWithValue,
	      getState,
	    } = thunkAPI;
		  // Достаём форму
	    const formData = getProfileForm(getState());

	    try {
	      const response = await extra.api.put<Profile>('/profile', formData);
	      return response.data;
	    } catch (e) {
	      console.log(e);
	      //  dispatch #2
	      return rejectWithValue('Неправильный логин или пароль');
	    }
	  },
	);
