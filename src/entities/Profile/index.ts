export { fetchProfileData } from './model/services/fetchProfileData/getProfileData';
export { updateProfileData } from './model/services/updateProfileData/updateProfileData';

export {
  Profile,
  ProfileSchema,
} from './model/types/Profile.type';

export {
  profileActions,
  profileReducer,
} from './model/slice/profileSlice';

export { ProfileCard } from './UI/ProfileCard/ProfileCard';

export { getProfileLoading } from './model/selectors/getProfileLoading/getProfileLoading';
export { getProfileError } from './model/selectors/getProfileError/getProfileError';
export { getProfileData } from './model/selectors/getProfileData/getProfileData';
export { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly';
export { getProfileForm } from './model/selectors/getProfileForm/getProfileForm';
