import React, { useState} from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {

  const [signIn, setSignIn] = useState("Sign In")


  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signIn}</h1>
        <form>
          {signIn === "Sign Up"?<input type="text" placeholder="Username" />:<></>}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">{signIn}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signIn === "Sign In"?
              <p>New to Netflix? 
                <span onClick={()=>{setSignIn("Sign Up")}}>
                  Sign Up Now</span>
              </p>
              :<p>Already have an account? 
                <span onClick={()=>{setSignIn("Sign In")}}>
                  Sign In Now</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login
