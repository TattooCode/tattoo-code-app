import axios from 'axios';
import { getCache } from '../config/Storage';
import { loadStudiosRoute } from '../config/Routes';
import {
  LOAD_STUDIO,
  LOAD_STUDIO_SUCCESS,
  LOAD_STUDIO_FAIL
} from './types';

export const loadStudios = () => {
  return (dispatch) => {
    getCache('userToken', token => {
      dispatch({ 
        type: LOAD_STUDIO
      });

      axios.get(loadStudiosRoute, { headers: { Authorization: `Bearer ${token}` } })
      .then(response => loadStudiosSuccess(dispatch, response.data))
      .catch((error) => loadStudiosFail(dispatch, error));
    });
  };
};

const loadStudiosSuccess = (dispatch, data) => {
  console.log(data);
  dispatch({
    type: LOAD_STUDIO_SUCCESS,
    payload: data
  });
};

const loadStudiosFail = (dispatch, error) => {
  console.log(error);
  dispatch({ type: LOAD_STUDIO_FAIL });
};
