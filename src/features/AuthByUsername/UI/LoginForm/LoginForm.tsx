import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/UI/Button/Button';
import Input from 'shared/UI/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string
}

const LoginForm = (props: LoginFormProps) => {
  const { t } = useTranslation();
  const {
    className,
  } = props;
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        className={cls.input}
        type="text"
        placeholder={t('Введите пользователя')}
        autoFocus
      />
      <Input
        className={cls.input}
        type="text"
        placeholder={t('Введите пароль')}
      />
      <Button className={cls.loginBtn}>
        {t('Войти')}
      </Button>
    </div>
  );
};

export default LoginForm;
