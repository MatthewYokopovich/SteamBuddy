import React, { Component } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Search from "./pages/Search";
import SearchResults from "./pages/SearchResults";
import Account from "./pages/Account";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";

class App extends Component {
  state={
    loggedIn: false,
  }

  componentDidMount(){
    this.setState({
      loggedIn: API.checkLogin()===true
    })
  }

  render(){
    return(
    <Router>
      <Nav />
      <Switch>
      <Route exact path="/account" >
        <Account loggedIn={this.state.loggedIn} /> </Route>
      <Route exact path="/search" >
        <Search loggedIn={this.state.loggedIn} /> </Route>
      <Route exact path="/search/:appid" component={SearchResults} />
        {/* <SearchResults loggedIn={this.state.loggedIn} /> </Route> */}
      <Route>
      <Home loggedIn={this.state.loggedIn} /> </Route>
      </Switch>
    </Router>)
  }
}

export default App;
