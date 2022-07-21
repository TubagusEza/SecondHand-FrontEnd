/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */

const initialState = {
  userIDLoading: false,
  userIDResult: false,
  userIDError: false,
};

export const getUserIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_ID':
      console.log(action.payload);
      return {
        ...state,
        userIDLoading: action.payload.loading,
        userIDResult: action.payload.result,
        userIDError: action.payload.error,
      };
    default:
      return state;
  }
};
