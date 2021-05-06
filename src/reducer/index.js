import { combineReducers } from "redux";
import home from "./home";
import userReducer from "./userReducer";
import trainerReducer from "./trainerReducer";

export const reducers = combineReducers({
  home,
  userReducer,
  trainerReducer,
});
