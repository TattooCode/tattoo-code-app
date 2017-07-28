import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import RegisterReducer from './RegisterReducer';
import ProfileReducer from './ProfileReducer';
import FeedReducer from './FeedReducer';
import PublishReducer from './PublishReducer';
import RequestNotificationReducer from './RequestNotificationReducer';

export default combineReducers({
  auth: AuthReducer,
  register: RegisterReducer,
  profile: ProfileReducer,
  feed: FeedReducer,
  publication: PublishReducer,
  requestNotification: RequestNotificationReducer
});
