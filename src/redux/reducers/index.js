import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import { getProductReducer } from './product';
import { getProfileReducer } from './profile';
import { updateProductReducer } from './updateProduct';
import { getSellerProductReducer } from './sellerProduct';
import { getTransactionProductReducer } from './createTransaction';

export default combineReducers({
  auth,
  message,
  getProductReducer,
  getProfileReducer,
  updateProductReducer,
  getSellerProductReducer,
  getTransactionProductReducer,
});
