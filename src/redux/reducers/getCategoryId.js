/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */

const initialState = {
  categoryLoading: false,
  categoryResult: false,
  categoryError: false,
};

export const getCategoryIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATEGORY_ID':
      console.log(action.payload);
      return {
        ...state,
        categoryLoading: action.payload.loading,
        categoryResult: action.payload.result,
        categoryError: action.payload.error,
      };
    default:
      return state;
  }
};
