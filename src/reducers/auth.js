function auth(state = false, action) {
  if (action.type == "LOGOUT") return false;
  else if (action.type == "LOGIN") return true;
  else return state;
}

export default auth;
