import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData, ValidateProfileErrors } from 'entities/Profile';
import { ProfileSchema } from '../types/Profile.type';
import { profileActions, profileReducer } from './profileSlice';

const data = {
  age: 32,
  city: 'Moscow',
  country: Country.RUSSIA,
  currency: Currency.RUB,
  firstName: 'Vladimir',
  lastName: 'Krylov',
  username: 'krylovDev',
};

describe('profileSlice', () => {
  test('set readonly true', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(
			state as ProfileSchema,
			profileActions.setReadonly(true),
    )).toStrictEqual({ readonly: true });
  });

  test('set readonly false', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: true };
    expect(profileReducer(
			state as ProfileSchema,
			profileActions.setReadonly(false),
    )).toStrictEqual({ readonly: false });
  });

  test('cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
    expect(profileReducer(
			state as ProfileSchema,
			profileActions.cancelEdit(),
    )).toStrictEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test('update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: 'testUsername' } };
    expect(profileReducer(
			state as ProfileSchema,
			profileActions.updateProfile({
			  username: 'testUsername',
			}),
    )).toStrictEqual({
      form: { username: 'testUsername' },
    });
  });

  test('update profile / service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileErrors.SERVER_ERROR],
    };
    expect(profileReducer(
			state as ProfileSchema,
			updateProfileData.pending,
    )).toEqual({
	    isLoading: true,
	    validateErrors: undefined,
    });
  });

  test('update profile / service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileErrors.SERVER_ERROR],
    };
    expect(profileReducer(
			state as ProfileSchema,
			updateProfileData.fulfilled(data, ''),
    )).toEqual({
	    isLoading: false,
	    validateErrors: undefined,
	    readonly: true,
	    form: data,
	    data,
    });
  });
});
