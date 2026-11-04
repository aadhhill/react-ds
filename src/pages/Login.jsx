import React from 'react'
import './login.css';

function Login() {
  return (
    <div className="log-main">
      <div className="details">
        <h1>Sign In</h1>
    <input type="text" placeholder='enter email id'></input><br />
    <input type="text" placeholder='enter password'></input><br />
    <button>Login</button>
      </div>
    </div>
  
   
    
  )
}

export default Login