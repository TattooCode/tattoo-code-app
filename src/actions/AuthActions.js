import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { getCache, setCache } from '../config/Storage';
import { loginRoute, verifyTokenRoute } from '../config/Routes';
import {
  CREDENTIALS_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  VERIFY_TOKEN
} from './types';

export const credentialsChanged = ({ prop, value }) => {
  return {
    type: CREDENTIALS_CHANGED,
    payload: { prop, value }
  };
};

export const loginUserWithEmail = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ 
      type: LOGIN_USER 
    });

    axios.post(loginRoute, { email, password })
      .then(response => loginUserSuccess(dispatch, response.data))
      .catch((error) => { 
          loginUserFail(dispatch);
          console.log(error); 
      });
  };
};

export const verifyToken = () => {
  return (dispatch) => {
    getCache('userToken', token => {
      dispatch({ 
        type: VERIFY_TOKEN 
      });
      
      axios.post(verifyTokenRoute, { headers: { Authorization: `Bearer ${token}` } })
        .then(response => loginUserSuccess(dispatch, response.data))
        .catch((error) => console.log(error));
    });
  };
};

export const loginUserWithFacebook = (userID) => {
  return (dispatch) => {
    dispatch({ 
      type: LOGIN_USER
    });
    axios.post(loginRoute, { id_facebook: userID })
      .then(response => loginUserSuccess(dispatch, response.data))
      .catch((error) => { 
          loginUserFail(dispatch);
          console.log(error);
      });
  };
};

const loginUserSuccess = (dispatch, user) => {
  setCache('userToken', user.token);
  setCache('userInfo', user);
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  Actions.main();
};

const loginUserFail = dispatch => {
  dispatch({ type: LOGIN_USER_FAIL });
};
