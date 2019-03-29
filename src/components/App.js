import React from "react";
import List from "./List";
import Form from "./Form";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello User, This is React Redux ToDo App</h1>
        <Form />
        <List />
      </div>
    );
  }
}

export default App;
