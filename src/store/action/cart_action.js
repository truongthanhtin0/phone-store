import axios from "axios";
import { toastError, toastSuccess } from "../../utils/toast";
import {
  GET_CART_SUCCESS,
  GET_CART_FAIL,
  DELETE_CART_SUCCESS,
  DELETE_CART_FAIL,
  EDIT_CART_SUCCESS,
  EDIT_CART_FAIL,
  ADD_CART_SUCCESS,
  ADD_CART_FAIL,
} from "./../constant";

// const url = "http://localhost:3002";
const url = "http://192.168.68.51:3333";

export const getCart = (params) => async (dispatch) => {
  try {
    // const response = await axios.get(`${url}/carts`);
    const response = await axios.get(`${url}/cart`);
    dispatch({
      type: GET_CART_SUCCESS,
      payload: response.data,
      // payload: response.data.carts,
    });
  } catch (error) {
    dispatch({
      type: GET_CART_FAIL,
      payload: error.message,
    });
  }
};

export const deleteCart = (params) => async (dispatch) => {
  const { id } = params;
  try {
    //  const response = await axios.delete(`${url}/carts/${id}`);
    const response = await axios.delete(`${url}/cart/${id}`);

    dispatch({
      type: DELETE_CART_SUCCESS,
      payload: response.data,
    });
    toastSuccess("Delete Product Successfully!");
  } catch (error) {
    dispatch({
      type: DELETE_CART_FAIL,
      payload: error.message,
    });
    toastError(error.message);
  }
};

export const deleteAllCart = () => async () => {
  try {
    const response = await axios.get(`${url}/cart/delete`);
    console.log('chay o day r')
    toastSuccess(response.data.message);
  } catch (error) {
    toastError(error.message);
  }
};

export const editCart = (params) => async (dispatch) => {
  const { id } = params;
  try {
    const response = await axios.put(`${url}/cart/${id}`, { ...params });

    dispatch({
      type: EDIT_CART_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: EDIT_CART_FAIL,
      payload: error.message,
    });
    toastError(error.message);
  }
};

export const addCart = (params) => async (dispatch) => {
  const { id } = params;
  try {
    // const response = await axios.post(`${url}/carts/`, { ...params });
    const response = await axios.post(`${url}/product/${id}`);

    dispatch({
      type: ADD_CART_SUCCESS,
      payload: response.data,
    });

    // if (response.error) {
    //   throw new Error(response.error);
    // }

    toastSuccess("Add to cart successfully!");
  } catch (error) {
    dispatch({
      type: ADD_CART_FAIL,
      payload: error.message,
    });
    toastError(error.message);
  }
};
