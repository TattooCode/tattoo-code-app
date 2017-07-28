import axios from 'axios';
import { getCache } from '../config/Storage';
import { ideaRoute } from '../config/Routes';
import {
  LOAD_IDEA_NOTIFICATIONS,
  LOAD_IDEA_NOTIFICATIONS_SUCCESS,
  LOAD_IDEA_NOTIFICATIONS_FAIL
} from './types';

export const loadIdeaNotification = () => {
  return (dispatch) => {
    getCache('userToken', token => {
      dispatch({ 
        type: LOAD_IDEA_NOTIFICATIONS
      });

      axios.post(ideaRoute, { headers: { Authorization: `Bearer ${token}` } })
        .then(response => loadIdeaNotificationSuccess(dispatch, response.data))
        .catch((error) => loadIdeaNotificationFail(dispatch, error));
    });
  };
};

const loadIdeaNotificationSuccess = (dispatch, data) => {
  dispatch({
    type: LOAD_IDEA_NOTIFICATIONS_SUCCESS,
    payload: data
  });
};

const loadIdeaNotificationFail = (dispatch, error) => {
  console.log(error);
  dispatch({ type: LOAD_IDEA_NOTIFICATIONS_FAIL });
};
