import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import { Comment } from 'entities/Comment';

//  dispatch #1
export const fetchCommentsByArticleId = createAsyncThunk<
	Comment[],
	string | undefined,
	ThunkConfig<string>
	>(
	  'article/fetchCommentsByArticleId',
	  async (articleId, thunkAPI) => {
	    const {
	      extra,
	      rejectWithValue,
	    } = thunkAPI;

	    if (!articleId) {
	      return rejectWithValue('error');
	    }

	    try {
	      const response = await extra.api.get<Comment[]>('/comments', {
	        params: {
	          articleId,
	          _expand: 'user',
	        },
	      });

	      if (!response.data) {
	        throw new Error();
	      }

	      return response.data;
	    } catch (e) {
	      //  dispatch #2
	      return rejectWithValue('Неправильный логин или пароль');
	    }
	  },
	);
