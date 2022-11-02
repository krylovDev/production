import axios from 'axios';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileErrors } from 'entities/Profile';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { updateProfileData } from './updateProfileData';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

const data = {
  age: 32,
  city: 'Moscow',
  country: Country.RUSSIA,
  currency: Currency.RUB,
  firstName: 'Vladimir',
  lastName: 'Krylov',
  username: 'krylovDev',
};

describe('updateProfileData', () => {
  test('fulfilled', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('rejected with server error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileErrors.SERVER_ERROR]);
  });

  test('rejected with invalid data: lastname', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastName: '' },
      },
    });

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
  });

  test('rejected with invalid data: city', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, city: '' },
      },
    });

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileErrors.INCORRECT_CITY]);
  });

  test('rejected with invalid data: age', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, age: undefined },
      },
    });

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
  });
});
