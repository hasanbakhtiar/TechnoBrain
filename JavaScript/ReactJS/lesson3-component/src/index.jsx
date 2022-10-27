import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import List from "./components/List";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello1</h1>
        <List title1="table" title2="laptop" />
        <List title1="book" title2="look" />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
