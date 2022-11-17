import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment/types/comment';

/* EntityState<Comment> вместо добавления в структуру
	ids: string[]
	entities: Record
* */
export interface ArticleDetailsCommentSchema extends EntityState<Comment> {
	isLoading?: boolean
	error?: string
}
