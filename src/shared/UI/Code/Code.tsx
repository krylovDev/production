import {
  memo, useCallback, useEffect, useRef, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/UI/Button/Button';
import Text from 'shared/UI/Text/Text';
import cls from './Code.module.scss';

interface CodeProps {
	className?: string
	text: string
}

const Code = memo((props: CodeProps) => {
  const { t } = useTranslation();
  const {
    className,
	  text,
  } = props;
  const [copiedText, setCopiedText] = useState<string>('');

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
    setCopiedText(t('Скопировано'));
  }, [t, text]);

  const setText = useCallback(() => {
    setTimeout(() => {
      setCopiedText('');
    }, 5000);
  }, []);

  useEffect(() => {
    setText();
  }, [copiedText, setText]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button
        className={cls.copyBtn}
        theme={ButtonTheme.CLEAR}
        onClick={onCopy}
      >
        {copiedText && (
          <Text
            className={cls.copyText}
            text={copiedText}
          />
        )}
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});

export default Code;
