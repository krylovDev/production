import { getProfileData } from 'entities/Profile';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading/getProfileLoading';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/UI/Button/Button';
import Input from 'shared/UI/Input/Input';
import Text from 'shared/UI/Text/Text';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
	className?: string
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const {
    className,
  } = props;

  const profileData = useSelector(getProfileData);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Профиль')} />
        <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.editBtn}
        >
          {t('Редактировать')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={profileData?.firstName}
          placeholder={t('Ваше имя')}
          className={cls.input}
        />
        <Input
          value={profileData?.lastName}
          placeholder={t('Ваша фамилия')}
          className={cls.input}
        />
      </div>
    </div>
  );
};
