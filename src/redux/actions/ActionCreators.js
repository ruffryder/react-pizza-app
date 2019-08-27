import { ActionTypes } from "./Types";
import { data as phData } from "../../data";

export const loadData = dataType => ({
  type: ActionTypes.DATA_LOAD,
  payload: {
    dataType: dataType,
    data: phData[dataType]
  }
});
