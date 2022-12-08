import actionTypes from "./productActionTypes";

export const initializer = {
  loading: false,
  products: [],
  error: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };
    case actionTypes.FETCHING_END:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
