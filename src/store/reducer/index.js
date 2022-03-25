import { combineReducers } from "redux";
import productReducer from "./product_reducer";
import cartReducer from "./cart_reducer";

export default combineReducers({
  productReducer,
  cartReducer,
});
