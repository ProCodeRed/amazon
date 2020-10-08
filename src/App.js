import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Checkout from './Components/Checkout';
import Header from './Components/Header';
import Home from './Components/Home'
import Login from './Components/Login';
import { useStateValue } from './Components/StateProvider';
import { auth } from './firebase';

function App() {
  const [{basket, user }, dispatch] = useStateValue();
  // useEffect the most power full
  //  piece of code which runs based on a given condoition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        // the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else{
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    return () => {
      //  any cleaning activity does here
      unsubscribe();
    }
  }, [])
  console.log('This is user', user)
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
     </div>
   </Router>
    
  );
}

export default App;
