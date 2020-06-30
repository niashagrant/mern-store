import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/App/Header";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup"


class App extends Component {
  render() {
    return (
      <Router>
      <Header/>
      <Switch>
        <Route exact path="/"/>
        <Route exact path="/account" component={Account}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/logout"/>
      </Switch>
      </Router>
    );
  }
}

export default App;
