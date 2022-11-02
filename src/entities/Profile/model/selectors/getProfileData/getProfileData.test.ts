import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('возвращаются данные profile', () => {
    const data = {
      age: 32,
      city: 'Moscow',
      country: Country.RUSSIA,
      currency: Currency.RUB,
      firstName: 'Vladimir',
      lastName: 'Krylov',
      username: 'krylovDev',
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('с пустым стейтом', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
