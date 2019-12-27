import { ActionTypes } from "../actions/Types";
const INITIAL_STATE = {
  dishes: null,
  categories: null,
  ingredients: null
};

export const DataReducer = (state = INITIAL_STATE, action) => {
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
    case ActionTypes.UPDATE_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload
      };
    default:
      return state || {};
  }
};
