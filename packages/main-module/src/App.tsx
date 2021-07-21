import React from "react";
import ReactDOM from "react-dom";

const PomoModuleApp = React.lazy(() => import("pomo-module/src/PomoModuleApp"));
import TodoListModuleApp from "todolist-module/src/TodoListModuleApp";
import { WindowModule } from "shared-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pomo">pomo</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/pomo">
              <React.Suspense fallback={<div>carregando...</div>}>
                <PomoModuleApp />
              </React.Suspense>
            </Route>
          </Switch>
        </div>
      </Router>
      <TodoListModuleApp />
    </section>
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));
