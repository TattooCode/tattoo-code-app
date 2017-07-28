import {
  LOAD_STUDIO,
  LOAD_STUDIO_SUCCESS,
  LOAD_STUDIO_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  studios: [],
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_STUDIO:
      return { ...state, error: '', loading: true };
    case LOAD_STUDIO_SUCCESS:
      return { 
        ...state, 
        ...INITIAL_STATE, 
        studios: action.payload,
        loading: false,
        error: '' 
      };
    case LOAD_STUDIO_FAIL:
      return { ...state, error: 'Error when requesting post', loading: false };
    default:
      return state;
  }
};
