import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import MenuBar from "./components/Menubar";
import Marquee from "./components/Marquee";
import Cart from "./pages/Cart";
import SignIn from "./components/SignIn/index";
import SignUp from "./components/SignUp";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Ticker from "./components/Ticker"


// const stripePromise = loadStripe("pk_test_51H2jAhF6rrHNM5skrWeDa7Ug2AjxFHAhKeuw8Dv1m2OGNI7WEWf1zebIu8zW5MLhYYygTV7WcfG5L7TOSCtwpfWX00nxZ8LW4t");

function App (props) {

const [user, setLogin]=useState()
 console.log(user);
 
    return (
      // <Elements stripe={stripePromise}>
      <Router>
        <Ticker/>
        <MenuBar setLogin={setLogin} user={user}{...props}/>
      <Marquee/>
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/cart" render={(props)=><Cart user={user} {...props}/>}/>
        <Route exact path="/product/:ProductId" render={(props)=><Product user={user} {...props}/>}/>
        <Route exact path={"/login"} render={(props)=><SignIn setLogin={setLogin} {...props}/>}/>
        <Route exact path="/signup" component={()=><SignUp />}/>
        <Route exact path="/logout"/>
      </Switch>
      </Router>
    );
  
}

export default App;
