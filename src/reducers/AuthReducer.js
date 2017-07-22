import {
  CREDENTIALS_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  VERIFY_TOKEN
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREDENTIALS_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication failed.', password: '', loading: false };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case VERIFY_TOKEN:
      return { ...state, loading: true, error: '' };
    default:
      return state;
  }
};
