import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import "firebase/app";

import { auth } from '../firebase';
import firebase from 'firebase/app';
import logo from '../img/winged hat.png';

const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">

                <img className="logo-icon" src={logo}/>
                <h2>Welcome to Hermes!</h2>
                
                <div
                    className="login-button google"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())} //This function allows us to login with Google
                    >
                    <GoogleOutlined /> Sign In with Google
                </div>

                <br></br>
                <br></br>

                <div
                    className="login-button facebook"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())} //This function allows us to login with Facebook
                >
                    <FacebookOutlined /> Sign In with Facebook
                </div>
            </div>
        </div>
    );
};

export default Login;
