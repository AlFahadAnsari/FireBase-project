import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
    auth,
    signInGoogle,
    logInWithEmailAndPassword,
  } from '../Firebase.js'

import { useAuthState } from 'react-firebase-hooks/auth';

useAuthState


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const [user,loading,error]=useAuthState(auth)

  // TODO *************
  useEffect(() => {
    if(loading) return
    if(user) navigate('/dashboard')
    
  }, [user,loading])
  

  return (
    <div className="login">
      <div className="login_box">
        <input
          type="email"
          className="login_einput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
          required
        />
        <input
          type="password"
          className="login_pinput"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button
          className="login_btn"
          // TODO *************
          onClick={()=>logInWithEmailAndPassword(email,password)}
        >
          Login
        </button>
        <button
          className="login_btn login_googlebtn"
          // TODO *************
          onClick={signInGoogle}
        >
          <div>
            Login with Google
            <img
              src="https://www.transparentpng.com/thumb/google-logo/google-logo-png-icon-free-download-SUF63j.png"
              alt=""
            />
          </div>
        </button>
        <div className="extra_options">
          <div>
            <Link to="/reset">Forgot Password</Link>
          </div>
          <div>
            Don't have an account? <Link to="/register">Register</Link> now.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;