import playnowReducer from "./playnow";
import queueReducer from "./queue";
import { combineReducers } from "redux";
import isPlaying from "./isPlaying";

const rootReducer = combineReducers({
  playnow: playnowReducer,
  queue: queueReducer,
  isPlaying: isPlaying,
});

export default rootReducer;
