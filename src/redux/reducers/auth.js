/* eslint-disable no-fallthrough */
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  UPDATE_SUCCESS,
  UPDATE_FAIL,
} from '../actions/types';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { isLoggedIn: true, isRegistered: true, user }
  : { isLoggedIn: false, isRegistered: false, user: null };
// eslint-disable-next-line default-param-last
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        isRegistered: true,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        isRegistered: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case UPDATE_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}
