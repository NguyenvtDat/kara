function isPlaying(state = false, action) {
  if (action.type == "PAUSED") return false;
  else if (action.type == "PLAYED") return true;
  else return state;
}

export default isPlaying;
