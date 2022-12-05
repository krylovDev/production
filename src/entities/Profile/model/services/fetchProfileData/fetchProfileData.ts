import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import { Profile } from '../../types/Profile.type';

/*
* 8.52
* */

//  dispatch #1
export const fetchProfileData = createAsyncThunk<
	Profile,
	string,
	ThunkConfig<string>
	>(
	  'profile/fetchProfileData',
	  async (profileId, thunkAPI) => {
		  console.log('profileId', profileId);
	    const {
	      extra,
	      rejectWithValue,
	    } = thunkAPI;
	    try {
	      const response = await extra.api.get<Profile>(`/${AppRoutes.PROFILE}/${profileId}`);

	      if (!response.data) {
	        throw new Error();
	      }

	      return response.data;
	    } catch (e) {
	      console.log(e);
	      //  dispatch #2
	      return rejectWithValue('Неправильный логин или пароль');
	    }
	  },
	);
