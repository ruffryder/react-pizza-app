import { combineReducers } from "redux";
import { DataReducer } from "./reducers/DataReducer";
import CartReducer from "./reducers/CartReducer";
import ItemReducer from "./reducers/ItemReducer";

export default combineReducers({
  data: DataReducer,
  cart: CartReducer,
  item: ItemReducer
});
