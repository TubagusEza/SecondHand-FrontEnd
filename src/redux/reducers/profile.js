/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { updateProfile } from '../actions/profile';

const initialState = {
  profileLoading: false,
  profileResult: false,
  profileError: false,
};

export const getProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateProfile':
      console.log(action.payload);
      console.log('lewat 15');
      return {
        ...state,
        profileLoading: action.payload.loading,
        profileResult: action.payload.result,
        profileError: action.payload.error,
      };
    default:
      return state;
  }
};
