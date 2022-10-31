import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Select from 'shared/UI/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
	className?: string
	value?: Country
	onChange?: (country: Country) => void
	// Состояния
	readonly?: boolean
}

const options = [
  { value: Country.RUSSIA, content: Country.RUSSIA },
  { value: Country.UKRAINE, content: Country.UKRAINE },
  { value: Country.BELARUS, content: Country.BELARUS },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { t } = useTranslation('');
  const {
    className,
    value,
    onChange,
    readonly,
  } = props;

  const onChangeHandler = useCallback((value: string) => {
    if (onChange) {
      onChange(value as Country);
    }
  }, [onChange]);

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('Укажите страну')}
      options={options}
      value={value}
      onChange={onChangeHandler}
			// Состояния
      readonly={readonly}
    />
  );
});
