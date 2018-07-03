import { post } from "../services/HttpService";
import { USER_URL, CREATE_USER } from "./index";

export function createUser(body) {
  const request = post(USER_URL, body);

  return {
    type: CREATE_USER,
    payload: request
  };
}