import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/UI/Button/Button';
import Modal from 'shared/UI/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  const handleToggleModal = useCallback(() => {
    setIsModalOpened((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        className={classNames(cls.links)}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={handleToggleModal}
      >
        {t('Войти')}
      </Button>
      <Modal
        isOpen={isModalOpened}
        onClose={handleToggleModal}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        autem consequuntur cupiditate, dolor dolore expedita illo porro possimus, praesentium
        quis rem tempora temporibus veritatis vero voluptas? Culpa dolorem facilis nesciunt?
      </Modal>
    </div>
  );
};

export default Navbar;
