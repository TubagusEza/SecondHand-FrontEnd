/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { createProduct } from '../actions/createProduct';

const initialState = {
  createProductLoading: false,
  createProductResult: false,
  createProductError: false,
};

export const getProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'createProduct':
      console.log(action.payload);
      console.log('lewat 15');
      return {
        ...state,
        createProductLoading: action.payload.loading,
        createProductResult: action.payload.result,
        createProductError: action.payload.error,
      };
    default:
      return state;
  }
};
