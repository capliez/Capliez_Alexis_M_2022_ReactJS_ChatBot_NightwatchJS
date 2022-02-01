import { AT_AUTH } from "../../actions/action-types";
const INIT_STATE = {
  logged: false,
  username: "",
};

const Auth = (state = INIT_STATE, action) => {
  switch (action.type) {
    case AT_AUTH.LOGIN:
      return {
        logged: true,
        username: action.payload,
      };
    case AT_AUTH.LOGOUT:
      return {
        logged: false,
        username: "",
      };
    default:
      return { ...state };
  }
};

export default Auth;
