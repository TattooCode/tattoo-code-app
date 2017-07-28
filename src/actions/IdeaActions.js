import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { getCache } from '../config/Storage';
import { ideaRoute } from '../config/Routes';
import {
  LOAD_IDEA_NOTIFICATIONS,
  LOAD_IDEA_NOTIFICATIONS_SUCCESS,
  LOAD_IDEA_NOTIFICATIONS_FAIL,
  REQUEST_IDEA,
  REQUEST_IDEA_SUCCESS,
  REQUEST_IDEA_FAIL,
  REQUEST_IDEA_CHANGE
} from './types';

export const loadIdeaNotification = () => {
  return (dispatch) => {
    getCache('userToken', token => {
      dispatch({ 
        type: LOAD_IDEA_NOTIFICATIONS
      });

      axios.get(ideaRoute, { headers: { Authorization: `Bearer ${token}` } })
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

/* RequestIdea */

export const requestIdeaChanged = ({ prop, value }) => {
  return {
    type: REQUEST_IDEA_CHANGE,
    payload: { prop, value }
  };
};

export const requestIdea = ({ latitude, longitude, description, photo }) => {
  return (dispatch) => {
    getCache('userToken', token => {
      dispatch({ 
        type: REQUEST_IDEA
      });

      axios.post(ideaRoute,
        { latitude, longitude, description, photo },  
        { headers: { Authorization: `Bearer ${token}` } })
        .then(response => requestIdeaSuccess(dispatch, response.data))
        .catch((error) => requestIdeaFail(dispatch, error));
    });
  };
};

const requestIdeaSuccess = (dispatch, data) => {
  dispatch({
    type: REQUEST_IDEA_SUCCESS,
    payload: data
  });
  Actions.feed({ type: 'reset' });
};

const requestIdeaFail = (dispatch, error) => {
  console.log(error);
  dispatch({ type: REQUEST_IDEA_FAIL });
};
