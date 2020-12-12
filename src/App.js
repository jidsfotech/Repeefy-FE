import React from "react";
import { ToastProvider} from 'react-toast-notifications'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import NotFound from "./Pages/404/404";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AddBeneficiary from "./Pages/Wallet/AddBeneficiary";

const App = () => {
  return (
    <div className="App">
      <ToastProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/addbeneficiary" exact component={AddBeneficiary} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </ToastProvider>
    </div>
  );
};

export default App;
