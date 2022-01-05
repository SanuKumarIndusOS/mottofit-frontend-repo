import { combineReducers } from "redux";
import home from "./home";
import userReducer from "./userReducer";
import trainerReducer from "./trainerReducer";
import trainerCaptureReducer from "./TrainerCaptureReducer";
import messagingReducer from "./messagingReducer";

export const reducers = combineReducers({
  home,
  userReducer,
  trainerReducer,
  trainerCaptureReducer,
  messagingReducer,
});
