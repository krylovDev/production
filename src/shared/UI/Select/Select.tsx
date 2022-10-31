import { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Modes } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
	className?: string
	label?: string
	options?: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  // Состояния
  readonly?: boolean
}

const Select = memo((props: SelectProps) => {
  const {
    className,
	  label,
    options,
    value,
    onChange,
    readonly,
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log('e.target.value', e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  console.log('Select', value);

  const optionsList = useMemo(() => options?.map(({ value, content }) => (
    <option
      className={cls.option}
      value={value}
      key={value}
    >
      {content}
    </option>
  )), [options]);

  const mods: Modes = {

  };

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && (
      <span className={cls.label}>
        {`${label}>`}
      </span>
	    )}
      <select
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
        // Состояния
        disabled={readonly}
      >
        {optionsList}
      </select>
    </div>
  );
});

export default Select;
