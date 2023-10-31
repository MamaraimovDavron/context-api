import React, { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/Header/Header";
import Middle from "./components/Middle/Middle";
import ThemeContext from "./components/context/ThemeContext";

class App extends Component {
  state = {
    theme: "light",
    middle: "middleDark",
  };

  toggleTheme = () => {
    this.setState((state) => {
      return {
        middle: state.middle === "middleDark" ? "middleLight" : "middleDark",
        theme: state.theme === "dark" ? "light" : "dark",
      };
    });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{
          middle: this.state.middle,
          theme: this.state.theme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <div className="container">
          <Header />
          <Middle />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
