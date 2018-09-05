import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  <div>
    <h1>Hello World</h1>
  </div>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
