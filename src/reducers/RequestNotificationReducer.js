import {
  LOAD_IDEA_NOTIFICATIONS,
  LOAD_IDEA_NOTIFICATIONS_SUCCESS,
  LOAD_IDEA_NOTIFICATIONS_FAIL
} from '../actions/types';


const INITIAL_STATE = {
  id: null,
  user: {},
  uri: '',
  description: '',
  date: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_IDEA_NOTIFICATIONS:
      return { ...state, error: '', loading: true };
    case LOAD_IDEA_NOTIFICATIONS_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case LOAD_IDEA_NOTIFICATIONS_FAIL:
      return { ...state, error: 'Error requesting.', loading: false };
    default:
      return state;
  }
};
