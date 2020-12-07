import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      App.js
      <Router>
        <Switch>
          <Route path="/" />
          <Route path="/users" />
          <Route path="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
