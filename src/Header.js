import React from "react";
import moon from "./images/icon-moon.svg";

import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <h1 className="Header-title">Todo</h1>
        <img className="Header-moon-icon" src={moon} alt="moon icon" />
      </header>
    );
  }
}

export default Header;
