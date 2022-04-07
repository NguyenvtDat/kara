function queueReducer(state = [], action) {
  if (action.type == "ADDED_SONG") {
    return [...state, action.payload];
  } else if (action.type == "REMOVED_SONG") {
    return state.filter((song) => song.queueId !== action.payload.queueId);
  } else if (action.type == "CHANGE_QUEUE") {
    if (action.payload.queueId == 0) return state;
    let temp = {};
    const newState = state.filter((song) => {
      if (song.queueId !== action.payload.queueId) return true;
      else {
        temp = song;
        return false;
      }
    });
    newState.unshift(temp);
    return newState;
  } else return state;
}

export default queueReducer;
