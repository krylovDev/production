import {
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import { fetchProfileData } from 'entities/Profile/model/services/fetchProfileData/getProfileData';
import {
  memo,
  useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader,
{ ReducersList }
  from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfileProps {
	className?: string
}

const Profile = memo((props: ProfileProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const {
    className,
  } = props;
  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames('', {}, [className])}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
});

export default Profile;
