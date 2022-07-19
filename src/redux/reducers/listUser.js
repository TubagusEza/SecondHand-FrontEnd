/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { GET_LIST_USER } from '../actions/types';

const initialStateProduct = {
  userLoading: false,
  userResult: false,
  userError: false,
};

export const getListUserReducer = (state = initialStateProduct, action) => {
  switch (action.type) {
    case 'GET_LIST_USER':
      return {
        ...state,
        userLoading: action.payload.loading,
        userResult: action.payload.result,
        userError: action.payload.error,
      };
    default:
      return state;
  }
};
