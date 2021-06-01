import React from "react";

import "./AddTodo.css";

class AddTodo extends React.Component {
  render() {
    return (
      <form className="AddTodo">
        <label className="AddTodo-todos">
          <input type="checkbox" name="todos" />
          <span className="AddTodo-checkmark"></span>
        </label>
        <label htmlFor="create"></label>
        <input
          type="text"
          name="create"
          id="create"
          className="AddTodo-create"
          placeholder="Create a new todo..."
        />
      </form>
    );
  }
}

export default AddTodo;
