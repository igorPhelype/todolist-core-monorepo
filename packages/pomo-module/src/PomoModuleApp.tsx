import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import PomoPage from "./pages/PomoPage";

const TodoListModuleApp = () => {
  return <PomoPage />;
};

ReactDOM.render(<TodoListModuleApp />, document.getElementById("app"));

export default TodoListModuleApp;
