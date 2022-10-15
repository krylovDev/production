import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/UI/Button/Button';
import Input from 'shared/UI/Input/Input';
import Text, { TextTheme } from 'shared/UI/Text/Text';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string
}

const LoginForm = memo((props: LoginFormProps) => {
  const { t } = useTranslation();
  const {
    className,
  } = props;
  const dispatch = useDispatch();
  const {
    username,
    password,
    isLoading,
    error,
  } = useSelector(getLoginState);

  const handleChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const handleChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const handleLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [
    dispatch,
    password,
    username,
  ]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && <Text theme={TextTheme.ERROR} text={t('Неправильный логин или пароль')} />}
      <Input
        className={cls.input}
        type="text"
        placeholder={t('Введите пользователя')}
        autoFocus
        value={username}
        onChange={handleChangeUsername}
      />
      <Input
        className={cls.input}
        type="text"
        placeholder={t('Введите пароль')}
        value={password}
        onChange={handleChangePassword}
      />
      <Button
        className={cls.loginBtn}
        theme={ButtonTheme.OUTLINE}
        onClick={handleLogin}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});

export default LoginForm;
