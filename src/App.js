import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Navbar";
import Practice from "./Pages/Practice";
import Courses from "./Pages/Courses";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Practice />
          </Route>
          <Route path="/Courses">
            <Courses />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
