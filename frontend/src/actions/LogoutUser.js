import { logout } from "../services/AuthService";
import { LOGOUT_USER } from "./index";

export function logoutUser() {
  logout();

  return {
    type: LOGOUT_USER,
  };
}