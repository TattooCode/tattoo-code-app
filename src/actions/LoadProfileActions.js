import axios from 'axios';
import { getCache } from '../config/Storage';
import { loadProfileHeaderRoute, loadPostRoute } from '../config/Routes';
import {
  LOAD_PROFILE_HEADER_SUCCESS,
  LOAD_PROFILE_HEADER_FAIL,
  LOAD_PROFILE_HEADER,
  LOAD_PROFILE_IMAGES,
  LOAD_PROFILE_IMAGES_SUCCESS,
  LOAD_PROFILE_IMAGES_FAIL
} from './types';

export const loadHeader = (authorId = '') => {
  return (dispatch) => {
    getCache('userToken', (token) => {
      dispatch({ 
        type: LOAD_PROFILE_HEADER
      });

      axios.get(`${loadProfileHeaderRoute}/${authorId}`, 
      { headers: { Authorization: `Bearer ${token}` } })
        .then(response => loadHeaderSuccess(dispatch, response.data))
        .catch(() => loadHeaderFail(dispatch));
    });
  };
};

export const loadImages = (authorId = '') => {
  return (dispatch) => {
    getCache('userToken', (token) => {
      dispatch({ 
        type: LOAD_PROFILE_IMAGES
      });
      axios.post(`${loadPostRoute}/${authorId}`, 
      { headers: { Authorization: `Bearer ${token}` } })
        .then(response => loadImagesSuccess(dispatch, response.data))
        .catch(error => loadImageFail(dispatch, error));
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

const loadImagesSuccess = (dispatch, images) => {
  console.log(images);
  dispatch({
    type: LOAD_PROFILE_IMAGES_SUCCESS,
    payload: images
  });
};

const loadImageFail = (dispatch, error) => {
  console.log(error);
  dispatch({ type: LOAD_PROFILE_IMAGES_FAIL });
};
