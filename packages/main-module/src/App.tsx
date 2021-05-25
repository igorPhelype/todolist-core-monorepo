import React from "react";
import ReactDOM from "react-dom";

import TodoListModuleApp from "todolist-module/src/TodoListModuleApp";
import { WindowModule } from "shared-types";

import "./index.css";

declare let window: WindowModule;

window.headermodule.get("./src/Header").then((module) => {
  const Header = module().default;
  new Header({
    target: document.getElementById("header"),
  });
});

const App = () => (
  <>
    <section>
      <TodoListModuleApp />
    </section>
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));
