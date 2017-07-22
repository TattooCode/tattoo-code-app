import {
  LOAD_FEED,
  LOAD_FEED_SUCCESS,
  LOAD_FEED_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  posts: [],
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_FEED:
      return { ...state, error: '', loading: true };
    case LOAD_FEED_SUCCESS:
      return { 
        ...state, 
        ...INITIAL_STATE, 
        posts: action.payload,
        loading: false,
        error: '' 
      };
    case LOAD_FEED_FAIL:
      return { ...state, error: 'Error when requesting post', loading: false };
    default:
      return state;
  }
};
