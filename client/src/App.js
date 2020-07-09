import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuBar from "./components/Menubar";
import Marquee from "./components/Marquee";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import SignIn from "./components/SignIn/index"
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Product from "./pages/Product";



function App (props) {

  const [user, setLogin]=useState()
 console.log(user);
 


    return (
      <Router>
      <Marquee/>
      <MenuBar setLogin={setLogin} user={user}{...props}/>
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

    );
  
}

export default App;
