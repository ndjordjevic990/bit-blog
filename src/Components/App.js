import React from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Authors from "./Authors/Authors";
import About from "./About/About";
import SinglePost from "./Posts/SinglePost";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/authors" component={Authors} />
        <Route exact path="/about" component={About} />
        <Route exact path="/posts/:id" component={SinglePost} />
      </Switch>
    </div>
  );
}

export default App;
