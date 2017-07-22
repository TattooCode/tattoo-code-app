import axios from 'axios';
import { getCache } from '../config/Storage';
import { loadProfileHeaderRoute, loadProfileImagesRoute } from '../config/Routes';
import {
  LOAD_PROFILE_HEADER_SUCCESS,
  LOAD_PROFILE_HEADER_FAIL,
  LOAD_PROFILE_HEADER,
  LOAD_PROFILE_IMAGES,
  LOAD_PROFILE_IMAGES_SUCCESS,
  LOAD_PROFILE_IMAGES_FAIL
} from './types';

export const loadHeader = () => {
    return (dispatch) => {
      getCache('userToken', (token) => {
        dispatch({ 
          type: LOAD_PROFILE_HEADER
        });
        
        axios.get(loadProfileHeaderRoute, { headers: { Authorization: `Bearer ${token}` } })
        .then(response => loadHeaderSuccess(dispatch, response.data))
        .catch(() => loadHeaderFail(dispatch));
      });
  };
};

export const loadImages = () => {
  return (dispatch) => {
    getCache('userToken', (token) => {
      dispatch({ 
        type: LOAD_PROFILE_IMAGES
      });
      axios.post(loadProfileImagesRoute, { headers: { Authorization: `Bearer ${token}` } })
      .then(response => loadImagesSuccess(dispatch, response.data))
      .catch(() => loadImageFail(dispatch));
    });
  };
};

const loadHeaderSuccess = (dispatch, component) => {
  dispatch({
    type: LOAD_PROFILE_HEADER_SUCCESS,
    payload: component
  });
};

const loadHeaderFail = dispatch => {
  dispatch({ type: LOAD_PROFILE_HEADER_FAIL });
};

const loadImagesSuccess = (dispatch, component) => {
  dispatch({
    type: LOAD_PROFILE_IMAGES_SUCCESS,
    payload: component
  });
};

const loadImageFail = dispatch => {
  dispatch({ type: LOAD_PROFILE_IMAGES_FAIL });
};
