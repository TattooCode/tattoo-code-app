import axios from 'axios';
import { getCache } from '../config/Storage';
import { feedRoute } from '../config/Routes';
import {
  LOAD_FEED,
  LOAD_FEED_SUCCESS,
  LOAD_FEED_FAIL
} from './types';

export const loadFeed = () => {
  return (dispatch) => {
    getCache('userToken', token => {
      dispatch({ 
        type: LOAD_FEED
      });

      axios.get(feedRoute, { headers: { Authorization: `Bearer ${token}` } })
      .then(response => loadFeedSuccess(dispatch, response.data))
      .catch(() => loadFeedFail(dispatch));
    });
  };
};

const loadFeedSuccess = (dispatch, data) => {
  dispatch({
    type: LOAD_FEED_SUCCESS,
    payload: data
  });
};

const loadFeedFail = dispatch => {
  dispatch({ type: LOAD_FEED_FAIL });
};
