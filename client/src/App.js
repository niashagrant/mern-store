import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import MenuBar from "./components/Menubar";
import Marquee from "./components/Marquee";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import SignIn from "./components/SignIn/index"
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Product from "./pages/Product";


const stripePromise = loadStripe("pk_test_51H2jAhF6rrHNM5skrWeDa7Ug2AjxFHAhKeuw8Dv1m2OGNI7WEWf1zebIu8zW5MLhYYygTV7WcfG5L7TOSCtwpfWX00nxZ8LW4t");

function App (props) {

  const [user, setLogin]=useState()
 console.log(user);
 


    return (
      <Elements stripe={stripePromise}>
      <Router>
      <Marquee/>
      <MenuBar setLogin={setLogin}/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/account" component={Account}/>
        <Route exact path="/cart" render={(user)=><Cart user={user}/>}/> {/*}>>>>> NEW */}
    {/* <Route exact path="/cart" component={(user) ? Cart : ()=><Redirect to="/login"/> }/>  */}
        <Route exact path="/product/:ProductId" render={(props)=><Product user={user} {...props}/>}/>
        <Route exact path={"/login"} render={(props)=><SignIn setLogin={setLogin} {...props}/>}/>
        <Route exact path="/signup" component={()=><Signup />}/>
        <Route exact path="/logout"/>
        <Route exact path="/addToCart"/>
      </Switch>
      </Router>
      </Elements>

    );
  
}

export default App;
