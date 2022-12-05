import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import { validateProfile } from '../../services/validateProfile/validateProfile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { Profile, ValidateProfileErrors } from '../../types/Profile.type';

//  dispatch #1
export const updateProfileData = createAsyncThunk<
	Profile,
	void,
	ThunkConfig<ValidateProfileErrors[]>
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

		  const errors = validateProfile(formData);

	    if (errors.length) {
	      return rejectWithValue(errors);
	    }

	    try {
	      const response = await extra.api.put<Profile>(`/${AppRoutes.PROFILE}/${formData?.id}`, formData);

	      if (!response.data) {
	        throw new Error();
	      }

	      return response.data;
	    } catch (e) {
	      console.log(e);
	      //  dispatch #2
	      return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
	    }
	  },
	);
