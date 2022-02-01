import { combineReducers } from "redux";
import AuthReducer from "./auth/reducer";
import BotsReducer from "./bots/reducer";
import MessagesReducer from "./messages/reducer";
const reducers = combineReducers({
  Auth: AuthReducer,
  Messages: MessagesReducer,
  Bots: BotsReducer,
});

export default reducers;
