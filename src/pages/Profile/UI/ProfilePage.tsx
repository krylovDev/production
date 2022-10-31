import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
  getProfileError,
  getProfileForm,
  getProfileLoading,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer,
  fetchProfileData,
} from 'entities/Profile';
import {
  memo, useCallback,
  useEffect,
} from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import DynamicModuleLoader,
{ ReducersList }
  from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import ProfileHeader from './ProfileHeader/ProfileHeader';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
	className?: string
}

const ProfilePage = memo((props: ProfilePageProps) => {
  const dispatch = useAppDispatch();
  const profileForm = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const {
    className,
  } = props;

  const readonly = useSelector(getProfileReadonly);

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
        <ProfileHeader />
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
