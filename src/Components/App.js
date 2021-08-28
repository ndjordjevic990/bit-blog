import React from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Authors from "./Authors/Authors";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/authors" component={Authors} />
      </Switch>
    </div>
  );
}

export default App;
