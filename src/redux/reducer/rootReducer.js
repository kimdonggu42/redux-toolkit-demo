import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { showReducer } from "./showReducer";

export const rootReducer = combineReducers({
  counterReducer,
  showReducer
});