import { post } from "../services/HttpService";
import { USER_URL, LOGIN_USER, CREATE_USER } from "./index";

export function loginUser(body) {
  const request = post(USER_URL, body);

  return {
    type: CREATE_USER,
    payload: request
  };
}