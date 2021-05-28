import React from "react";
import "./App.css";

import TodoContainer from "./TodoContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TodoContainer />
      </div>
    );
  }
}

export default App;
