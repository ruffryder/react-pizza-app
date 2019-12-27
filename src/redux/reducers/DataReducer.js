import { ActionTypes } from "../actions/Types";

const INITIAL_STATE = {
  dishes: null,
  categories: null,
  ingredients: null,
  errorMessage: ""
};

export const DataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_INGREDIENTS_START:
      return {
        ...state
      };
    case ActionTypes.FETCH_INGREDIENTS_SUCCESS:
      return {
        ...state,
        ingredients: action.payload
      };
    case ActionTypes.FETCH_INGREDIENTS_FAIL:
      return {
        ...state,
        errorMessage: action.payload
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
