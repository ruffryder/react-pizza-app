import { ActionTypes } from "../actions/Types";
export const DataReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      return {
        ...state,
        [action.payload.dataType]: action.payload.data
      };
    default:
      return state || {};
  }
};
