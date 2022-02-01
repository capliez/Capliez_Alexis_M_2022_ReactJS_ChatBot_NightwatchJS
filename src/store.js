import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./redux/reducers";
import thunk from "redux-thunk";
import { AT_AUTH, AT_MESSAGES } from "./actions/action-types";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(
  reducers,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
const usernameLocal = localStorage.getItem("auth");
const messagesLocal = JSON.parse(localStorage.getItem("messages"));

if (usernameLocal)
  store.dispatch({ type: AT_AUTH.LOGIN, payload: usernameLocal });

if (messagesLocal)
  store.dispatch({ type: AT_MESSAGES.ADD, payload: messagesLocal });

export default store;
