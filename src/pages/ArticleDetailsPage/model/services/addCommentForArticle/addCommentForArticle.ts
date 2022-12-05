import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article';
import { getUserAuthData } from 'entities/User';
import { Comment } from 'entities/Comment';
import {
  fetchCommentsByArticleId,
} from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
	Comment,
	string,
	ThunkConfig<string>
	>(
	  'articleDetails/addCommentForArticle',
	  async (text, thunkAPI) => {
	    const {
	      extra,
	      dispatch,
	      rejectWithValue,
	      getState,
	    } = thunkAPI;

	    // Необходимо достать инфу о юзере, который оставляет комментарий
	    const userData = getUserAuthData(getState());
	    // Id статьи, к которой оставили комментарий
	    const article = getArticleDetailsData(getState());

	    if (!userData || !text || !article) {
	      return rejectWithValue('Неправильные данные');
	    }

	    try {
	      const response = await extra.api.post<Comment>('/comments', {
	        articleId: article.id,
	        userId: userData.id,
	        text,
	      });

	      if (!response.data) {
	        throw new Error();
	      }

	      // Запрашиваем комментарии уже с добавленным
	      dispatch(fetchCommentsByArticleId(article.id));

	      return response.data;
	    } catch (e) {
	      return rejectWithValue('Неправильный логин или пароль');
	    }
	  },
	);
