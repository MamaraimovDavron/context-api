import React, { Component } from "react";
import Header from "./components/Header/Header";
import Middle from "./components/Header/Middle/Middle";

export class App extends Component {
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
