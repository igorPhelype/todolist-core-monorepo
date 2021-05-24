import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import TasksListPage from "./pages/TasksListPage";

const TodoListModuleApp = () => {
  return <TasksListPage />;
};

ReactDOM.render(<TodoListModuleApp />, document.getElementById("app"));

export default TodoListModuleApp;
