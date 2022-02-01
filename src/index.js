import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./store";
import "./style.css";
import { CircularProgress } from "@material-ui/core";
ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<CircularProgress className="loading" />}>
      <Routes />
    </Suspense>
  </Provider>,
  document.getElementById("app")
);
