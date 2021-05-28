import React from "react";

import Header from "./Header";

import "./TodoContainer.css";

class TodoContainer extends React.Component {
  render() {
    return (
      <main className="TodoContainer">
        <Header />
      </main>
    );
  }
}

export default TodoContainer;
