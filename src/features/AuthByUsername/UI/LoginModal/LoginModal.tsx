import { classNames } from 'shared/lib/classNames/classNames';
import Modal from 'shared/UI/Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';

interface LoginModalProps {
	className?: string
  isOpen: boolean
  onClose: () => void
}

const LoginModal = (props: LoginModalProps) => {
  const {
    className,
    isOpen,
    onClose,
  } = props;
  return (
    <Modal
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <LoginForm />
    </Modal>
  );
};

export default LoginModal;
