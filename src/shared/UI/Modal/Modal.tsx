import { useTheme } from 'app/providers/ThemeProvider';
import React, {
  ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Portal from 'shared/UI/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
	className?: string
	children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 300;

const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy,
  } = props;
  const [isClosed, setIsClosed] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const { theme } = useTheme();

  const handleClickContent = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleClose = useCallback(() => {
    if (onClose) {
      setIsClosed(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosed(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  }, [handleClose]);

  // Управление монтированием
  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
    // При размонтировании - убираем Portal из DOM
    return () => setIsMounted(false);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [
    isOpen,
    onKeyDown,
  ]);

  // с флагом lazy - модалку в DOM-дерево не монтируем
  if (lazy && !isMounted) {
    return null;
  }

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.closed]: isClosed,
  };

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className={cls.overlay} onClick={handleClose}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div className={cls.content} onClick={handleClickContent}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
