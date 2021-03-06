/* eslint-disable import/prefer-default-export */
import { SET_PRODUCTS, GET_PRODUCT_META } from './types';
import getAllProduct from '../services/getProduct';

export const getListProducts = ({
  page, category, search, buyer,
}) => {
  console.log(buyer, page);
  return async (
    dispatch,
  ) => {
    try {
      const getProducts = await getAllProduct({
        page, category, search, buyer,
      });

      await dispatch({
        type: SET_PRODUCTS,
        payload: {
          loading: false,
          result: await getProducts.data.products,
          error: false,
        },
      });
      await dispatch({
        type: GET_PRODUCT_META,
        payload: {
          loading: false,
          result: await getProducts.data.meta,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: SET_PRODUCTS,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};
