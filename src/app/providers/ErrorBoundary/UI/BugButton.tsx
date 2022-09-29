import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'shared/UI/Button/Button';

/* Компонент для тестирования ErrorBoundary.
* Кнопка создаёт ошибку для отрисовки компонента <ErrorPage/>
*  */
const BugButton = () => {
  const [error, setError] = useState<boolean>(false);
  const { t } = useTranslation();

  const toggleErrorState = () => setError((val) => !val);

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return (
    <Button onClick={toggleErrorState}>
      {t('Вызвать ошибку')}
    </Button>
  );
};

export default BugButton;
