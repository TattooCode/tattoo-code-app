import {
  REQUEST_IDEA,
  REQUEST_IDEA_SUCCESS,
  REQUEST_IDEA_FAIL,
  REQUEST_IDEA_CHANGE
} from '../actions/types';

const INITIAL_STATE = {
    latitude: '',
    longitude: '',
    description: '', 
    photo: '',
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_IDEA:
      return { ...state, error: '', loading: true };
    case REQUEST_IDEA_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case REQUEST_IDEA_FAIL:
      return { ...state, error: 'Error uploading.', loading: false };
    case REQUEST_IDEA_CHANGE:
      return { ...state, [action.payload.prop]: action.payload.value, error: '' };
    default:
      return state;
  }
};
