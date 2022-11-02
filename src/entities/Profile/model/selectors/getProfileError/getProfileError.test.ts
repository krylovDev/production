import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('возвращается ошибка', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'some error',
      },
    };
    expect(getProfileError(state as StateSchema)).toEqual('some error');
  });
  test('с пустым стейтом', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
