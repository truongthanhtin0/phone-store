import axios from "axios";
import history from "../../utils/history";
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
import { toastError, toastSuccess } from "./../../utils/toast";

// const url = "http://localhost:3002";
const url = "http://192.168.68.51:3333";

export const getListProduct = (params) => async (dispatch) => {
  // const { page, limit } = params;
  try {
    // const response = await axios.get(`${url}/products`);
    const response = await axios.get(`${url}/product`);

    // const response = await axios({
    //   method: "GET",
    //   url: `${url}/products`,
    //   params: {
    //     ...(limit && { _limit: limit }),
    //     ...(page && { _page: page }),
    //   },
    // });

    dispatch({
      type: GET_LIST_PRODUCT_SUCCESS,
      // payload: response.data,
      payload: response.data.products,
    });
  } catch (error) {
    dispatch({
      type: GET_LIST_PRODUCT_FAIL,
      payload: error.message,
    });
  }
};

export const getProductDetail = (params) => async (dispatch) => {
  const { id } = params;
  try {
    // const response = await axios.get(`${url}/products/${id}`);
    const response = await axios.get(`${url}/product/${id}`);

    dispatch({
      type: GET_PRODUCT_DETAIL_SUCCESS,
      // payload: response.data,
      payload: response.data.product,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_DETAIL_FAIL,
      payload: error.message,
    });
  }
};

export const deleteProduct = (params) => async (dispatch) => {
  const { id } = params;
  try {
    // const response = await axios.delete(`${url}/products/${id}`);
    const response = await axios.delete(`${url}/product/${id}`);

    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: response.data,
    });
    toastSuccess("Delete Product Successfully!");
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error.message,
    });
    toastError(error.message);
  }
};

export const addProduct = (params) => async (dispatch) => {
  try {
    // const response = await axios.post(`${url}/products`, {
    //   ...params,
    // });
    const response = await axios.post(`${url}/product`, {
      ...params,
    });

    dispatch({
      type: ADD_PRODUCT_SUCCESS,
      payload: response.data,
    });
    toastSuccess("Add Product Successfully!");
    history.push("/admin");
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT_FAIL,
      payload: error.message,
    });
    toastError(error.message);
  }
};

export const editProduct = (params) => async (dispatch) => {
  const { id } = params;
  try {
    // const response = await axios.put(`${url}/products/${id}`, { ...params });
    const response = await axios.put(`${url}/product/${id}`, { ...params });

    dispatch({
      type: EDIT_PRODUCT_SUCCESS,
      payload: response.data,
    });
    toastSuccess("Edit Product Successfully!");
    history.push("/admin");
  } catch (error) {
    dispatch({
      type: EDIT_PRODUCT_FAIL,
      payload: error.message,
    });
    toastError(error.message);
  }
};

export const setProduct = (params) => (dispatch) => {
  dispatch({
    type: SET_PRODUCT,
    payload: params,
  });
};
