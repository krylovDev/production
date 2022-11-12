import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import { Article } from '../../types/article';

//  dispatch #1
export const fetchArticleById = createAsyncThunk<
	Article,
	string,
	ThunkConfig<string>
	>(
	  'article/fetchProfileData',
	  async (articleId, thunkAPI) => {
	    const {
	      extra,
	      rejectWithValue,
	    } = thunkAPI;
	    try {
	      const response = await extra.api.get<Article>(`/${AppRoutes.ARTICLES}/${articleId}`);

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
