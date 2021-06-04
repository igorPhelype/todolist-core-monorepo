import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import PomoPage from "./pages/PomoPage";

const PomoModuleApp = () => {
  return <PomoPage />;
};

ReactDOM.render(<PomoModuleApp />, document.getElementById("app"));

export default PomoModuleApp;
