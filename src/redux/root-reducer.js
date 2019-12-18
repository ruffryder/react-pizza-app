import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { DataReducer } from "./reducers/DataReducer";
import CartReducer from "./reducers/CartReducer";
import ItemReducer from "./reducers/ItemReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["boccianiCart"]
};

const rootReducer = combineReducers({
  data: DataReducer,
  boccianiCart: CartReducer,
  item: ItemReducer
});

export default persistReducer(persistConfig, rootReducer);
