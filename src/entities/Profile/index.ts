export {
  Profile,
  ProfileSchema,
} from './model/types/Profile.type';

export {
  profileActions,
  profileReducer,
} from './model/slice/profileSlice';

export { ProfileCard } from './UI/ProfileCard/ProfileCard';

export {
  getProfileData,
} from './model/selectors/getProfileData/getProfileData';
