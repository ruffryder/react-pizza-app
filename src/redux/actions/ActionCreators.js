import { ActionTypes } from "./Types";
import { data as phData } from "../../data";

export const loadData = dataType => ({
  type: ActionTypes.DATA_LOAD,
  payload: {
    dataType: dataType,
    data: phData[dataType]
  }
});

export const updateDishes = dishesData => ({
  type: ActionTypes.UPDATE_DISHES,
  payload: dishesData
});

export const updateCategories = categoriesData => ({
  type: ActionTypes.UPDATE_CATEGORIES,
  payload: categoriesData
});
