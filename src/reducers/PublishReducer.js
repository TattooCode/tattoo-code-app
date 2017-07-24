import {
  PUBLISH,
  PUBLISH_SUCCESS,
  PUBLISH_FAIL,
  PUBLICATION_CHANGE
} from '../actions/types';

const INITIAL_STATE = {
  description: '',
  photo: '',
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PUBLISH:
      return { ...state, error: '', loading: true };
    case PUBLISH_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case PUBLISH_FAIL:
      return { ...state, error: 'Error uploading.', loading: false };
    case PUBLICATION_CHANGE:
      return { ...state, [action.payload.prop]: action.payload.value, error: '' };
    default:
      return state;
  }
};
