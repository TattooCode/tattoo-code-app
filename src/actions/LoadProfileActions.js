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
        .catch(error => loadHeaderFail(dispatch, error));
    });
  };
};

export const loadImages = (authorId = '') => {
  return (dispatch) => {
    getCache('userToken', (token) => {
      dispatch({ 
        type: LOAD_PROFILE_IMAGES
      });
      axios.get(`${loadPostRoute}/${authorId}`, 
      { headers: { Authorization: `Bearer ${token}` } })
        .then(response => loadImagesSuccess(dispatch, response.data))
        .catch(error => loadImageFail(dispatch, error));
    });
  };
};

const loadHeaderSuccess = (dispatch, header) => {
  dispatch({
    type: LOAD_PROFILE_HEADER_SUCCESS,
    payload: header
  });
};

const loadHeaderFail = (dispatch, error) => {
  console.log(error);
  dispatch({ type: LOAD_PROFILE_HEADER_FAIL });
};

const loadImagesSuccess = (dispatch, images) => {
  dispatch({
    type: LOAD_PROFILE_IMAGES_SUCCESS,
    payload: images
  });
};

const loadImageFail = (dispatch, error) => {
  console.log(error);
  dispatch({ type: LOAD_PROFILE_IMAGES_FAIL });
};
