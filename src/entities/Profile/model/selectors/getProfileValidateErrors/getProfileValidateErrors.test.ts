import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileErrors } from '../../types/Profile.type';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
  test('возвращаются коды ошибок', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileErrors.SERVER_ERROR,
          ValidateProfileErrors.INCORRECT_USER_DATA,
        ],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileErrors.SERVER_ERROR,
      ValidateProfileErrors.INCORRECT_USER_DATA,
    ]);
  });
  test('с пустым стейтом', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
