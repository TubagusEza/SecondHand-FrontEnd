/* eslint-disable import/prefer-default-export */
import { GET_LIST_USER } from './types';
import getUser from '../services/getUser';

export const getListUser = () => {
  return async (dispatch) => {
    try {
      const getUserById = await getUser();
      await dispatch({
        type: GET_LIST_USER,
        payload: {
          loading: false,
          result: await getUserById.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_LIST_USER,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};
