import { combineReducers } from "redux";
import { DataReducer } from "./reducers/DataReducer";

export default combineReducers({
  data: DataReducer
});
