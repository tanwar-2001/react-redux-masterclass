import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { accountReducer } from "./reducers/account";
import { bonusReducer } from "./reducers/bonus";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(
  combineReducers({ account: accountReducer, bonus: bonusReducer }),
  applyMiddleware(thunk, logger)
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
