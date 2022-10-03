import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/UI/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
	className?: string
}

// TODO Добавить картинку. Улучшить дизайн окна ошибки
const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  const [count, setCount] = useState<number>(5);

  const reloadPage = () => window.location.reload();
  const delayCount = () => setCount((count) => count - 1);
  const timeout = useCallback(() => setTimeout(delayCount, 1000), []);
  const timer = useCallback(() => {
    if (count > 0) {
      timeout();
    } else {
      reloadPage();
    }
  }, [
    count,
    timeout,
  ]);

  useEffect(() => {
    timer();
  }, [
    count,
    timer,
  ]);

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <h2>{t('Опаньки! Что-то пошло не так')}</h2>
      {/* <h3> */}
      {/*  {`Страница перезагрузится через ${count} секунд`} */}
      {/* </h3> */}
      <Button onClick={reloadPage}>
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};

export default PageError;
