import { AT_MESSAGES } from "../../actions/action-types";
const INIT_STATE = {
  all: [],
  loading: true,
};
const Messages = (state = INIT_STATE, action) => {
  switch (action.type) {
    case AT_MESSAGES.ADD:
      return {
        loading: false,
        all: state.all.concat(action.payload),
      };
    default:
      return { ...state };
  }
};

export default Messages;
