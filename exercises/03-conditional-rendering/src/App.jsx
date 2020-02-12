import React from "react";
// import something
// import another thing
import { todos } from './data/todos';
import "./Todo.css";
import Todo from './Todo/Todo';

function App() {
  return <div className="App">
    <Todo todos={todos} showCompleted={false} />
  </div>;
}

export default App;
