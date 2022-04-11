import playnowReducer from "./playnow";
import queueReducer from "./queue";
import { combineReducers } from "redux";
import isPlaying from "./isPlaying";
import auth from "./auth";

const rootReducer = combineReducers({
  playnow: playnowReducer,
  queue: queueReducer,
  isPlaying: isPlaying,
  auth: auth,
});

export default rootReducer;
