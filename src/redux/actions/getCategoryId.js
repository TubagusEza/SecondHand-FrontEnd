/* eslint-disable import/prefer-default-export */
import { GET_CATEGORY_ID } from './types';
import getCategory from '../services/getCategoryId';

export const getCategoryId = (id) => {
  return async (dispatch) => {
    try {
      const getCategoryById = await getCategory(id);
      await dispatch({
        type: GET_CATEGORY_ID,
        payload: {
          loading: false,
          result: await getCategoryById.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_CATEGORY_ID,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};
