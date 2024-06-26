import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import {thunk} from "redux-thunk";

import reducer from "./reducers";

import App from "./App";
import "./index.css";

const store = createStore(reducer, compose(applyMiddleware(thunk)))

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);