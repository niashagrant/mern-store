import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuBar from "./components/Menubar";
import Marquee from "./components/Marquee";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Product from "./pages/Product";

class App extends Component {
  render() {
    return (
      <Router>
        <Marquee />
        <MenuBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/product/:ProductId" component={Product} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/logout" />
        </Switch>
      </Router>
    );
  }
}

export default App;
