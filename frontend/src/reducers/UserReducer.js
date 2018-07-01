import { CREATE_USER, LOGIN_USER } from "../actions/index";
import { configUser } from "../services/AuthService";

export default function userReducer(state={}, action) {
  switch (action.type) {
  case CREATE_USER:
    configUser(action.payload.data);
    return Object.assign({user: action.payload.data}, state);
  case LOGIN_USER:
    configUser(action.payload.data);
    return Object.assign({user: action.payload.data}, state);
  default:
    return state;
  }
}