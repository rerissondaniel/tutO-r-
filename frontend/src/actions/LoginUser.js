import { get } from "../services/HttpService";
import { USER_URL, LOGIN_USER } from "./index";

export function loginUser(user, authorization) {
  const request = get(USER_URL, authorization);

  return {
    type: LOGIN_USER,
    payload: request
  };
}