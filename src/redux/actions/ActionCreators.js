import { ActionTypes } from "./Types";
import {
  firestore,
  convertIngredientsSnapshotToMap
} from "../../firebase/firebase.utils";

export const updateDishes = dishesData => ({
  type: ActionTypes.UPDATE_DISHES,
  payload: dishesData
});

export const updateCategories = categoriesData => ({
  type: ActionTypes.UPDATE_CATEGORIES,
  payload: categoriesData
});

export const fetchIngredientsStart = () => ({
  type: ActionTypes.FETCH_INGREDIENTS_START
});

export const fetchIngredientsSuccess = ingredients => ({
  type: ActionTypes.FETCH_INGREDIENTS_SUCCESS,
  payload: ingredients
});

export const fetchIngredientsError = error => ({
  type: ActionTypes.FETCH_INGREDIENTS_FAIL,
  payload: error
});

export const fetchIngredientsStartAsync = () => {
  return dispatch => {
    const ingredientsRef = firestore.collection("ingredients");
    dispatch(fetchIngredientsStart);
    ingredientsRef
      .get()
      .then(snapshot => {
        const ingredientsMap = convertIngredientsSnapshotToMap(snapshot);
        dispatch(fetchIngredientsSuccess(ingredientsMap));
      })
      .catch(e => {
        dispatch(fetchIngredientsError(e.message));
      });
  };
};
