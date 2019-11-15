import React from 'react';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Account from "./pages/Account";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
      <Route exact path="/account" component={Account} />
      <Route exact path="/search" component={Search} />
      <Route component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
