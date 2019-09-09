import { ActionTypes } from "../actions/Types";

const INITIAL_STATE = {
  selectedItem: null,
  showItemDetails: false
};
const ItemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SELECT_ITEM:
      return {
        ...state,
        selectedItem: action.payload,
        showItemDetails: true
      };
    case ActionTypes.DESELECT_ITEM:
      return {
        ...state,
        showItemDetails: false,
        selectedItem: null
      };
    default:
      return state;
  }
};

export default ItemReducer;
