import React from "react";
import ReactDOM from "react-dom";
import TodoListModuleApp from "todolist-module/src/TodoListModuleApp";

import "./index.css";

const App = () => (
  <>
    <header>Header</header>
    <header>Nav</header>
    <section>
      <TodoListModuleApp />
    </section>
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));
