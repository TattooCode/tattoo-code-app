import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import RegisterReducer from './RegisterReducer';
import ProfileReducer from './ProfileReducer';
import FeedReducer from './FeedReducer';
import PublishReducer from './PublishReducer';
import LoadStudioReducer from './LoadStudioReducer';
import RequestNotificationReducer from './RequestNotificationReducer';
import RequestIdeaReducer from './RequestIdeaReducer';

export default combineReducers({
  auth: AuthReducer,
  register: RegisterReducer,
  profile: ProfileReducer,
  feed: FeedReducer,
  publication: PublishReducer,
  requestNotification: RequestNotificationReducer,
  studios: LoadStudioReducer,
  idea: RequestIdeaReducer
});
