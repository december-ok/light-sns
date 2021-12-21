import React from "react";
import { render } from "react-dom";
import { store } from "./modules/store";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./sytles/style.scss";
import { HashRouter } from "react-router-dom";
import App from "./app";

render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
