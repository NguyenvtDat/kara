import Songs from "../img/songs/songs";

const initialState = Songs[0];
function playnowReducer(state = initialState, action) {
  if (action.type == "NEXT_SONG") {
    if (!isNaN(action.payload.id)) {
      return Songs.find((song) => song.id == action.payload.id);
    }
    return state;
  } else return state;
}

export default playnowReducer;
