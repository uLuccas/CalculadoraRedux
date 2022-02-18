import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import App from "./App";
import { AllScren } from "./components/styles/styled";

ReactDOM.render(
  <React.StrictMode>
    <AllScren>
      <Provider store={store}>
        <App />
      </Provider>
    </AllScren>
  </React.StrictMode>,
  document.getElementById("root")
);
