import { ActionTypes } from "../actions/Types";

export const DataReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      return {
        ...state,
        [action.payload.dataType]: action.payload.data
      };
    case ActionTypes.UPDATE_DISHES:
      return {
        ...state,
        dishes: action.payload
      };
    case ActionTypes.UPDATE_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    default:
      return state || {};
  }
};
