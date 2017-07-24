import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { setCache } from '../config/Storage';
import { registerUserByEmailRoute } from '../config/Routes';
import {
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL
} from './types';

export const createUser = ({ name, nickname, email, password, biography, photo }) => {
  return (dispatch) => {
    dispatch({ 
      type: CREATE_USER
    });
    axios.post(registerUserByEmailRoute, 
    {
        name,
        nickname,
        email,
        password,
        biography,
        photo
    })
    .then(response => createUserSuccess(dispatch, response.data.user))
    .catch((error) => createUserFail(dispatch, error));
  };
};

const createUserSuccess = (dispatch, user) => {
  setCache('userToken', user.token);
  setCache('userInfo', JSON.stringify(user));

  dispatch({
    type: CREATE_USER_SUCCESS,
    payload: user
  });
  Actions.main();
};

const createUserFail = (dispatch, error) => {
  console.log(error);
  dispatch({ type: CREATE_USER_FAIL });
};
