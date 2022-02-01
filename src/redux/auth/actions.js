import { AT_AUTH } from "../../actions/action-types";

export function login(username) {
  return function (dispatch) {
    const authLocalStorage = localStorage.getItem("auth");
    const usernameCurrent = authLocalStorage ? authLocalStorage : username;

    if (!authLocalStorage) {
      localStorage.setItem("auth", username);
    }

    dispatch({
      type: AT_AUTH.LOGIN,
      payload: usernameCurrent,
    });
  };
}

export function logout() {
  return function (dispatch) {
    const authLocalStorage = localStorage.getItem("auth");

    if (authLocalStorage) {
      localStorage.removeItem("auth");
    }

    dispatch({
      type: AT_AUTH.LOGOUT,
    });
  };
}
