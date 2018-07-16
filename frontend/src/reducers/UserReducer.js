import { CREATE_USER, LOGIN_USER, LOGOUT_USER } from "../actions/index";
import { configUser } from "../services/AuthService";

export default function userReducer(state={}, action) {
  switch (action.type) {
  case CREATE_USER:
    configUser(action.payload.data);
    return Object.assign({user: action.payload.data}, state);
  case LOGIN_USER:
    configUser(action.payload.data);
    return Object.assign({user: action.payload.data}, state);
  case LOGOUT_USER:
    state.user = {};
    return state;
  default:
    return state;
  }
}