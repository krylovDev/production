import {
  ChangeEvent, InputHTMLAttributes, memo, ReactEventHandler, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames, Modes } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
	className?: string
	value?: string | number
	onChange?: (value: string) => void
  autofocus?: boolean
  readonly?: boolean
}

const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [caretPosition, setCaretPosition] = useState<number>(0);
  const ref = useRef<HTMLInputElement>(null);

  // Показываем каретку, если инпут в фокусе и режим редактирования
  const isCaretVisible = isFocused && !readonly;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    // Двигаем каретку на длину строки
    setCaretPosition(e.target.value.length);
  };

  // Вешаем фокус на input, при монтировании
  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref?.current?.focus();
    }
  }, [autofocus]);

  // Когда из input уходим
  const onBlurHandler = useCallback(() => setIsFocused(false), []);

  // Когда на input нажимаем
  const onFocusHandler = useCallback(() => setIsFocused(true), []);

  // Двигаем каретку в выбранное место
  const onSelectHandler = useCallback((e: any) => setCaretPosition(e?.target?.selectionStart || 0), []);

  const mods: Modes = {
    [cls.eadonly]: readonly,
  };

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {/* Если есть placeholder - отображаем */}
      {placeholder && (
      <div className={cls.placeholder}>
        {`${placeholder}>`}
      </div>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
          onSelect={onSelectHandler}
          readOnly={readonly}
          {...otherProps}
        />
        {/* Когда в фокусе - добавляем каретку */}
        {isCaretVisible
          && (
          <span
            className={cls.caret}
            style={{ left: `${caretPosition * 9}px` }}
          />
          )}
      </div>
    </div>
  );
});

export default Input;
