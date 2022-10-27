import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './sass/style.css';
import Header from "./components/Header";
import CardList from "./components/CardList";

class App extends Component {
  render() {
    return (
      <>
     <Header />
     <CardList />
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
