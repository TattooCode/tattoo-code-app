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
    .then(response => createUserSuccess(dispatch, response.data))
    .catch(() => createUserFail(dispatch));
  };
};

const createUserSuccess = (dispatch, result) => {
  setCache('userToken', result.user.token);
  
  dispatch({
    type: CREATE_USER_SUCCESS,
    payload: result
  });
  Actions.main();
};

const createUserFail = dispatch => {
  dispatch({ type: CREATE_USER_FAIL });
};
