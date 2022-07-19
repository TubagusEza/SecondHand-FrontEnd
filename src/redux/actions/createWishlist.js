/* eslint-disable import/prefer-default-export */
import { CREATE_WISHLIST } from './types';
import getUser from '../services/getUser';
import createWishlist from '../services/createWishlist';

export const createWishlistBuyer = (productById, condition) => {
  return async (dispatch) => {
    try {
      const getBuyer = await getUser();
      const listWishlist = await createWishlist(productById, condition);
      console.log(listWishlist.data);

      await dispatch({
        type: CREATE_WISHLIST,
        payload: {
          loading: false,
          result: await listWishlist.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: CREATE_WISHLIST,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};
