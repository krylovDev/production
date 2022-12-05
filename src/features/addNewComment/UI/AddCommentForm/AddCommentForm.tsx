import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import Button from 'shared/UI/Button/Button';
import Input from 'shared/UI/Input/Input';
import {
  addNewCommentActions,
  addNewCommentReducer,
} from '../../model/slices/addNewCommentSlice';
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../model/selectors/addCommenFormSelector';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
	className?: string
  onSendComment: (text: string) => void
}

const AddCommentForm = (props: AddCommentFormProps) => {
  const { t } = useTranslation();
  const {
    className,
    onSendComment,
  } = props;
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addNewCommentActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [
    onCommentTextChange,
    onSendComment,
    text,
  ]);

  const reducers: ReducersList = {
    addCommentForm: addNewCommentReducer,
  };

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          className={cls.input}
          placeholder={t('Введите текст комментария')}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button
          onClick={onSendHandler}
        >
          {t('Отправить')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
