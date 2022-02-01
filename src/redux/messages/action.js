import { AT_MESSAGES } from "../../actions/action-types";

export function add(message) {
  return function (dispatch) {
    var newLocal = [];
    if (localStorage.getItem("messages") != undefined) {
      newLocal = JSON.parse(localStorage.getItem("messages"));
    }
    newLocal.push(message);
    localStorage.setItem("messages", JSON.stringify(newLocal));

    dispatch({
      type: AT_MESSAGES.ADD,
      payload: message,
    });
  };
}
