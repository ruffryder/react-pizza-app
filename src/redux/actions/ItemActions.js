import { ActionTypes } from "./Types";

export const selectItem = item => ({
  type: ActionTypes.SELECT_ITEM,
  payload: item
});

export const deselectItem = () => ({
  type: ActionTypes.DESELECT_ITEM
});
