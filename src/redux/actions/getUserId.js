/* eslint-disable import/prefer-default-export */
import { GET_USER_ID } from './types';
import getIdUser from '../services/getUserId';

export const getUserId = (id) => {
  return async (dispatch) => {
    try {
      const getUserById = await getIdUser(id);
      await dispatch({
        type: GET_USER_ID,
        payload: {
          loading: false,
          result: await getUserById.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_USER_ID,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};
