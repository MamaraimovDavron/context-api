/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import ThemeContext from "../context/ThemeContext";
import "./header.css";

class Header extends Component {
  static contextType = ThemeContext;

  render() {
    console.log(this.context);
    return (
      <header className={`light ${this.context.theme}`}>
        <div className="left">
          <h4>Kevin Bennet</h4>
          <ul>
            <li>
              <a href="!#">Section two</a>
            </li>

            <li>
              <a href="!#">Section three</a>
            </li>

            <li>
              <a href="!#">Section four</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="icons">
            <a href="#">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#">
              <i class="bi bi-telegram"></i>
            </a>
            <a href="#">
              <i class="bi bi-instagram"></i>
            </a>
          </div>

          <div className="btn">
            <span>
              {`${this.context.theme === "dark" ? "Dark" : "Light"}`}{" "}
            </span>
            <button
              className={`btn ${
                this.context.theme === "dark" ? "btn-light" : "btn-dark"
              }`}
              onClick={this.context.toggleTheme}
            ></button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
