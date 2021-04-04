import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import makeStore from "./store";
import ChatBoxContainer from "./containers/ChatBox/ChatBoxContainer";

const store = makeStore();

ReactDOM.render(
  <Provider store={store}>
  <ChatBoxContainer/>
  </Provider>,
  document.getElementById("react-app")
);