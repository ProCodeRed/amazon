import React, {useState} from 'react';
import './Login.css';
import {Link, useHistory } from "react-router-dom"
import { auth } from '../firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");
    const login = event => {
        event.preventDefault(); // to remove default refresh

        //loginlogic
        auth.signInWithEmailAndPassword(email, password).then((auth) =>{
            
            // logged in successfully and redirect to home page..
            history.push("/"); //this is redirect to home page after login

        }).catch((err) => alert(err.message));
    }

    const register = event => {
        event.preventDefault(); // to remove default refresh
        // register logic
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            
            // new user craeted and redirected at home..
            history.push("/");//this is redirect to home page after registered
        }).catch((err) => alert(err.message));
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="login-logo" />

            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                        value={email} 
                        onChange={event => setEmail(event.target.value)} 
                        type="email" 
                    />
                    <h5>Password</h5>
                    <input
                         value={password} 
                         onChange={event => setPassword(event.target.value)} type="passowrd" 
                    />
                    <button type="submit" onClick={login} className="login__signInButton">Sign In</button>
                </form>
                <p className="desclaimer">
                    By signing in you agree to Amazon's Condition use & sale. Please see our Privacy Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className="login__ResgisterButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;
