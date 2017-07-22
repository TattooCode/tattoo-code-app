import {
  CREDENTIALS_CHANGED,
  LOGIN_CREATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '', 
  nickname: '', 
  email: '', 
  password: '', 
  biography: '',
  photo: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREDENTIALS_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value, error: '' };
    case LOGIN_CREATE:
      return { ...state, loading: true, error: '' };
    default:
      return state;
  }
};
