import {
  LOAD_PROFILE_HEADER,
  LOAD_PROFILE_HEADER_SUCCESS,
  LOAD_PROFILE_HEADER_FAIL,
  LOAD_PROFILE_IMAGES,
  LOAD_PROFILE_IMAGES_SUCCESS,
  LOAD_PROFILE_IMAGES_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  images: [],
  header: {
    nickname: '',
    name: '',
    biography: '', 
    uri: null
  },
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_PROFILE_HEADER:
      return { ...state, error: '', loading: true };
    case LOAD_PROFILE_HEADER_SUCCESS:
      return { ...state, ...INITIAL_STATE, header: action.payload };
    case LOAD_PROFILE_HEADER_FAIL:
      return { ...state, error: 'Error when requesting profile', loading: false };
    case LOAD_PROFILE_IMAGES:
      return { ...state, header: action.payload, loading: true };
    case LOAD_PROFILE_IMAGES_SUCCESS:
      return { ...state, ...INITIAL_STATE, image: action.payload };  
    case LOAD_PROFILE_IMAGES_FAIL:
      return { ...state, error: 'Error when requesting profile', loading: false };  
    default:
      return state;
  }
};
