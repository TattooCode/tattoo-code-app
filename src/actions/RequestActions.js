import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { getCache } from '../config/Storage';
import { ideaRoute } from '../config/Routes';

import {
  PUBLISH,
  PUBLISH_SUCCESS,
  PUBLISH_FAIL,
  PUBLICATION_CHANGE
} from './types';

export const requestChanged = ({ prop, value }) => {
  return {
    type: PUBLICATION_CHANGE,
    payload: { prop, value }
  };
};

export const request = ({ description, photo }) => {
  return (dispatch) => {
    getCache('userToken', token => {
      dispatch({ 
        type: PUBLISH
      });

      axios.post(feedRoute,
        { description, photo },  
        { headers: { Authorization: `Bearer ${token}` } })
        .then(response => publishSuccess(dispatch, response.data))
        .catch((error) => publishFail(dispatch, error));
    });
  };
};

const publishSuccess = (dispatch, data) => {
  dispatch({
    type: PUBLISH_SUCCESS,
    payload: data
  });
  Actions.feed({ type: 'reset' });
};

const publishFail = (dispatch, error) => {
  console.log(error);
  dispatch({ type: PUBLISH_FAIL });
};
