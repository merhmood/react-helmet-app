import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "./pages/index";
import Recipe from "./pages/single-recipe";

import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/single-recipe" exact>
            <p>error page</p>
          </Route>
          <Route path="/single-recipe/:name" exact>
            <Recipe />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
