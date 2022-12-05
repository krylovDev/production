import {
  getProfileData,
  getProfileError,
  getProfileForm, getProfileLoading,
  getProfileReadonly, getProfileValidateErrors,
  profileActions,
  updateProfileData,
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import Button, { ButtonTheme } from 'shared/UI/Button/Button';
import Text from 'shared/UI/Text/Text';
import cls from './ProfileHeader.module.scss';

interface ProfileHeaderProps {
	className?: string
}

const ProfileHeader = memo((props: ProfileHeaderProps) => {
  const { t } = useTranslation('profile');
  const authData = useSelector(getUserAuthData);
  const profile = useSelector(getProfileData);
  const validateErrors = useSelector(getProfileValidateErrors);
  const dispatch = useAppDispatch();
  const {
    className,
  } = props;

  const isOwner = useMemo(
    () => authData?.id === profile?.id,
    [
      authData?.id,
      profile?.id,
    ],
  );

  const readonly = useSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [
    dispatch,
  ]);

  return (
    <div className={classNames(cls.ProfileHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {
        isOwner && (
          <div className={cls.btnWrapper}>
            {readonly
              ? (
                <Button
                  theme={ButtonTheme.OUTLINE}
                  className={cls.editBtn}
                  onClick={onEdit}
                >
                  {t('Редактировать')}
                </Button>
              ) : (
                <>
                  <Button
                    theme={ButtonTheme.OUTLINE_RED}
                    className={cls.cancelBtn}
                    onClick={onCancelEdit}
                  >
                    {t('Отменить')}
                  </Button>
                  <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.saveBtn}
                    onClick={onSave}
                  >
                    {t('Сохранить')}
                  </Button>
                </>
              )}

          </div>
        )
      }
    </div>
  );
});

export default ProfileHeader;
