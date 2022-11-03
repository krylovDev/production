import { Profile, ValidateProfileErrors } from '../../types/Profile.type';

export const validateProfile = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileErrors.NO_DATA];
  }
  const {
    firstName,
    lastName,
    age,
    city,
  } = profile;

  const errors: ValidateProfileErrors[] = [];

  if (!firstName || !lastName) {
	  errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
	  errors.push(ValidateProfileErrors.INCORRECT_AGE);
  }

  if (!city) {
	  errors.push(ValidateProfileErrors.INCORRECT_CITY);
  }

  return errors;
};
