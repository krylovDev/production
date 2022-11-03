import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileErrors } from 'entities/Profile';
import { validateProfile } from './validateProfile';

const data = {
  age: 32,
  city: 'Moscow',
  country: Country.RUSSIA,
  currency: Currency.RUB,
  firstName: 'Vladimir',
  lastName: 'Krylov',
  username: 'krylovDev',
};

describe('validateProfile', () => {
  test('ok data', async () => {
    const result = validateProfile(data);

    expect(result).toEqual([]);
  });

  test('Без имени и фамилии', async () => {
	  const result = validateProfile({ ...data, firstName: '', lastName: '' });

	  expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_DATA,
	  ]);
  });

  test('Без города', async () => {
    const result = validateProfile({ ...data, city: '' });

    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_CITY,
    ]);
  });

  test('Без возраста', async () => {
    const result = validateProfile({ ...data, age: undefined });

    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_AGE,
    ]);
  });

  test('Без данных', async () => {
    const result = validateProfile({});

    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_DATA,
      ValidateProfileErrors.INCORRECT_AGE,
      ValidateProfileErrors.INCORRECT_CITY,
    ]);
  });
});
