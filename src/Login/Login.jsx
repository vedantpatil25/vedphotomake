import React from 'react'
import "./Login.css"
import { Navbar } from '../components'
const Login = () => {
  return (
    <>
    <Navbar/>
<div className="form">
<div className="text-center">
  <h6><span>Log In</span> <span>Sign Up</span></h6>
  <input type="checkbox" className="checkbox" id="reg-log"/>
  <label for="reg-log"></label>
  <div className="card-3d-wrap">
    <div className="card-3d-wrapper">
      <div className="card-front">
        <div className="center-wrap">
          <h4 className="heading">Log In</h4>
          <div className="form-group">
            <input type="email" className="form-style" placeholder="Your Email"/>
            <i className="input-icon material-icons">alternate_email</i>
          </div>
          <div className="form-group">
            <input type="password" className="form-style" placeholder="Your Password"/>
            <i className="input-icon material-icons">lock</i>
          </div>
          <a href="#" className="btn">submit</a>
          <p className="text-center"><a href="#" className="link">Forgot your password</a></p>
        </div>
      </div>


      <div className="card-back">
        <div className="center-wrap">
          <h4 className="heading">Sign Up</h4>
          <div className="form-group">
            <input type="text" className="form-style" placeholder="Your Full Name"/>
            <i className="input-icon material-icons">perm_identity</i>
          </div>
          <div className="form-group">
            <input type="email" className="form-style" placeholder="Your Email"/>
            <i className="input-icon material-icons">alternate_email</i>
          </div>
          <div className="form-group">
            <input type="password" className="form-style" placeholder="Your Password"/>
            <i className="input-icon material-icons">lock</i>
          </div>
          <a href="#" className="btn">submit</a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

    </>
  )
}

export default Login

