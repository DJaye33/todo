import React from "react";

import Header from "./Header";
import AddTodo from "./AddTodo";

import "./TodoContainer.css";

class TodoContainer extends React.Component {
  render() {
    return (
      <main className="TodoContainer">
        <Header />
        <AddTodo />
      </main>
    );
  }
}

export default TodoContainer;
