import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer, ValidateProfileErrors,
} from 'entities/Profile';
import {
  memo,
  useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import Text, { TextTheme } from 'shared/UI/Text/Text';
import ProfileHeader from './ProfileHeader/ProfileHeader';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
	className?: string
}

const ProfilePage = memo((props: ProfilePageProps) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const profileForm = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);
  const validateErrors = useSelector(getProfileValidateErrors);
  const readonly = useSelector(getProfileReadonly);
  const { id } = useParams<{ id: string }>();

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const {
    className,
  } = props;

  const validateErrorTranslates = {
    [ValidateProfileErrors.SERVER_ERROR]: t('Ошибка на сервере. Попробуйте позже'),
    [ValidateProfileErrors.NO_DATA]: t('Данные не указаны'),
    [ValidateProfileErrors.INCORRECT_AGE]: t('Некорректный возраст'),
    [ValidateProfileErrors.INCORRECT_CITY]: t('Не указан город'),
    [ValidateProfileErrors.INCORRECT_USER_DATA]: t('Имя и фамилия обязательный'),
  };

  const onChangeFirstName = useCallback((v: string) => {
    dispatch(profileActions.updateProfile({ firstName: v || '' }));
  }, [dispatch]);

  const onChangeLastName = useCallback((v: string) => {
    dispatch(profileActions.updateProfile({ lastName: v || '' }));
  }, [dispatch]);

  const onChangeAge = useCallback((v: string) => {
    dispatch(profileActions.updateProfile({ age: Number(v || '') }));
  }, [dispatch]);

  const onChangeCity = useCallback((v: string) => {
    dispatch(profileActions.updateProfile({ city: v || '' }));
  }, [dispatch]);

  const onChangeUsername = useCallback((v: string) => {
    dispatch(profileActions.updateProfile({ username: v || '' }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((v: string) => {
    dispatch(profileActions.updateProfile({ avatar: v || '' }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
  }, [dispatch]);

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames('', {}, [className])}>
        {!error && (
          <ProfileHeader />
        )}
        {validateErrors?.length && validateErrors.map((error) => (
          <Text
            key={error}
            theme={TextTheme.ERROR}
            text={validateErrorTranslates[error]}
          />
        ))}
        <ProfileCard
          data={profileForm}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
