import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAIL,
  EDIT_PRODUCT_SUCCESS,
  GET_LIST_PRODUCT_FAIL,
  GET_LIST_PRODUCT_SUCCESS,
  GET_PRODUCT_DETAIL_FAIL,
  GET_PRODUCT_DETAIL_SUCCESS,
  SET_PRODUCT,
} from "../constant";

const initialState = {
  productList: [],
  productDetail: {},
  dataDeleteProduct: {},
  dataAddProduct: {},
  dataEditProduct: {},
  getProduct: {},
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIST_PRODUCT_SUCCESS: {
      return {
        ...state,
        productList: [...action.payload],
      };
    }
    case GET_LIST_PRODUCT_FAIL: {
      return state;
    }
    case GET_PRODUCT_DETAIL_SUCCESS: {
      return {
        ...state,
        productDetail: { ...action.payload },
      };
    }
    case GET_PRODUCT_DETAIL_FAIL: {
      return state;
    }
    case DELETE_PRODUCT_SUCCESS: {
      return {
        ...state,
        dataDeleteProduct: { ...action.payload },
      };
    }
    case DELETE_PRODUCT_FAIL: {
      return state;
    }
    case ADD_PRODUCT_SUCCESS: {
      return {
        ...state,
        dataAddProduct: { ...action.payload },
      };
    }
    case ADD_PRODUCT_FAIL: {
      return state;
    }
    case EDIT_PRODUCT_SUCCESS: {
      return {
        ...state,
        dataEditProduct: { ...action.payload },
      };
    }
    case EDIT_PRODUCT_FAIL: {
      return state;
    }
    case SET_PRODUCT: {
      return {
        ...state,
        getProduct: { ...action.payload },
      };
    }
    default:
      return state;
  }
}
