import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage"
import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
          <PrivateRoute exact path="/bubblespage" component={BubblePage} />
          <Route exact path="/" component={Login} />

      </Switch>
      </div>

    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute