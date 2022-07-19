/* eslint-disable import/prefer-default-export */
import { GET_WISHLIST } from './types';
import getUser from '../services/getUser';
import getWishlist from '../services/wishlist';

export const wishlistBuyer = () => {
  return async (dispatch) => {
    try {
      const getBuyer = await getUser();
      const listWishlist = await getWishlist();
      console.log(listWishlist.data.products);

      await dispatch({
        type: GET_WISHLIST,
        payload: {
          loading: false,
          result: await listWishlist.data.products,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_WISHLIST,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};
