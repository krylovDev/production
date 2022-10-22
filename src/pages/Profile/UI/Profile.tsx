import { profileReducer } from 'entities/Profile';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfileProps {
	className?: string
}

const Profile = memo((props: ProfileProps) => {
  const { t } = useTranslation();
  const {
    className,
  } = props;
  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames('', {}, [className])}>
        {t('PROFILE')}
      </div>
    </DynamicModuleLoader>
  );
});

export default Profile;
