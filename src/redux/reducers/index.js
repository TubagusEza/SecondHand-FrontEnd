import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import { getProductReducer } from './product';
import { getProfileReducer } from './profile';
import { updateProductReducer } from './updateProduct';
import { getSellerProductReducer } from './sellerProduct';
import { getTransactionProductReducer } from './createTransaction';
import { getListNotifications } from './getNotif';
import { getProductByIdReducer } from './getProductById';
import { getProductInterestReducer } from './productInterest';
import { getProductMetaReducer } from './productMeta';
import { getTransactionByUserIdReducer } from './getTransactionByUserId';
import { updateTransactionReducer } from './updateTransactionReducer';
import { updateTransactionConfirmationReducer } from './updateTransactionConfirmation';
import { getSoldProductReducer } from './soldProductReducer';
import { getHistoryBuyerReducer } from './historyBuyer';
import { getListUserReducer } from './listUser';
import { getWishlistReducer } from './wishlist';
import { createWishlistReducer } from './createWishlist';
import { getCategoryIdReducer } from './getCategoryId';
import { getUserIdReducer } from './getUserId';
import { getProductBySellerReducer } from './getProductBySeller';

export default combineReducers({
  auth,
  message,
  getProductReducer,
  getProfileReducer,
  updateProductReducer,
  getSellerProductReducer,
  getTransactionProductReducer,
  getListNotifications,
  getProductByIdReducer,
  getProductInterestReducer,
  getProductMetaReducer,
  getTransactionByUserIdReducer,
  updateTransactionReducer,
  updateTransactionConfirmationReducer,
  getSoldProductReducer,
  getHistoryBuyerReducer,
  getListUserReducer,
  getWishlistReducer,
  createWishlistReducer,
  getCategoryIdReducer,
  getUserIdReducer,
  getProductBySellerReducer,
});
