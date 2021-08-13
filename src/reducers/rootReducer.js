import { combineReducers } from "redux";
import { questionReducer } from "./questionReducer";
// import { timerReducer } from "./timerReducer";

export const rootReducer = combineReducers({
  question: questionReducer,
  // timer: timerReducer
});