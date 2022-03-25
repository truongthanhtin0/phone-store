import {
  GET_CART_SUCCESS,
  GET_CART_FAIL,
  DELETE_CART_SUCCESS,
  DELETE_CART_FAIL,
  EDIT_CART_SUCCESS,
  EDIT_CART_FAIL,
} from "./../constant";

const initialState = {
  cartData: {},
  dataDeleteCart: {},
  dataEditCart: {},
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART_SUCCESS: {
      return {
        ...state,
        cartData: {...action.payload},
      };
    }
    case GET_CART_FAIL: {
      return state;
    }
    case DELETE_CART_SUCCESS: {
      return {
        ...state,
        dataDeleteCart: { ...action.payload },
      };
    }
    case DELETE_CART_FAIL: {
      return state;
    }
    case EDIT_CART_SUCCESS: {
      return {
        ...state,
        dataEditCart: { ...action.payload },
      };
    }
    case EDIT_CART_FAIL: {
      return state;
    }
    default:
      return state;
  }
}
