import { ActionTypes } from "./Types";

export const toggleCartHidden = () => ({
  type: ActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: ActionTypes.ADD_ITEM,
  payload: item
});
