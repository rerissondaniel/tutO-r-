import axios from "axios";
import { USER_URL, LOGIN_USER } from "./index";

export function loginUser(user, callback) {
  const request = axios
    .get(`${USER_URL}/${user.email}`);

  return {
    type: LOGIN_USER,
    payload: request
  };
}