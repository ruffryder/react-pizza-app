import { combineReducers } from "redux";
import { DataReducer } from "./reducers/DataReducer";
import CartReducer from "./reducers/CartReducer";

export default combineReducers({
  data: DataReducer,
  cart: CartReducer
});
