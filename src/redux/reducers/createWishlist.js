/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line quotes
import { CREATE_WISHLIST } from "../actions/types";

const initialState = {
  wishlistLoading: false,
  wishlistResult: false,
  wishlistError: false,
};

export const createWishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_WISHLIST':
      console.log(action.payload);
      return {
        ...state,
        wishlistLoading: action.payload.loading,
        wishlistResult: action.payload.result,
        wishlistError: action.payload.error,
      };
    default:
      return state;
  }
};
