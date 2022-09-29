import React from 'react';
import { useTranslation } from 'react-i18next';
import BugButton from '../../../app/providers/ErrorBoundary/UI/BugButton';

const Main = () => {
  const { t } = useTranslation('main');
  return (
    <div>
      <BugButton />
      {t('Главная')}
    </div>
  );
};

export default Main;
