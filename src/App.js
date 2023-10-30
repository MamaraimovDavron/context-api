import React, { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/Header/Header";
import Middle from "./components/Middle/Middle";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Middle />
      </div>
    );
  }
}

export default App;
