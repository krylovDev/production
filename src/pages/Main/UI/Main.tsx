import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import BugButton from '../../../app/providers/ErrorBoundary/UI/BugButton';

const MainPage = memo(() => {
  const { t } = useTranslation('main');

  return (
    <div>
      <BugButton />
      {t('Главная')}
    </div>
  );
});

export default MainPage;
