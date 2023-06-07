import React from "react";
import { useState } from "react";
import "./Login.css";
import { Navbar } from "../components";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const[signUpError, setSignUpError] = useState('');

  //change handler
  const handleInputChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  //signup - submit handler
  const handleSubmit = () => {
    console.log(values);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async(res) => {
        console.log(res);
        const user = res.user;
        await updateProfile(user, 
          { displayName: values.name })
        console.log(user);
        navigate('/');
        alert('user created successfully')
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };

  //create user with email and password - signup

  return (
    <>
      <Navbar />
      <div className="form">
        <div className="text-center">
          <h6>
            <span>Log In</span> <span>Sign Up</span>
          </h6>

          <input type="checkbox" className="checkbox" id="reg-log" />
          <label for="reg-log"></label>
          <div className="card-3d-wrap">
            <div className="card-3d-wrapper">
              {/* ---------------------login---------------------------- */}
              {/* <form></form> */}
              <div className="card-front">
                <div className="center-wrap">
                  <h4 className="heading">Log In</h4>

                  {/* login email */}
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-style"
                      placeholder="Your Email"
                    />
                    <i className="input-icon material-icons">alternate_email</i>
                  </div>

                  {/* login password */}
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-style"
                      placeholder="Your Password"
                    />
                    <i className="input-icon material-icons">lock</i>
                  </div>
                  <button>
                    <a href="">google sign in</a>
                  </button>
                  <br />
                  <a href="#" className="btn">
                    submit
                  </a>
                  <p className="text-center">
                    <a href="#" className="link">
                      Forgot your password
                    </a>
                  </p>
                </div>
              </div>

              {/* ===============signUp====================== */}
              <div className="card-back">
                <div className="center-wrap">
                  <h4 className="heading">Sign Up</h4>

                  {/* signup name */}
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-style"
                      placeholder="Your Full Name"
                      name="name"
                      value={values.name}
                      onChange={handleInputChange}
                      required
                    />
                    <i className="input-icon material-icons">perm_identity</i>
                  </div>

                  {/* signup email */}
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-style"
                      placeholder="Your Email"
                      name="email"
                      value={values.email}
                      onChange={handleInputChange}
                      required
                    />
                    <i className="input-icon material-icons">alternate_email</i>
                  </div>

                  {/* signup password */}
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-style"
                      placeholder="Your Password"
                      name="password"
                      value={values.password}
                      onChange={handleInputChange}
                      required
                    />
                    <i className="input-icon material-icons">lock</i>
                  </div>

                  {/* signup error */}
                  <h3>{signUpError}</h3>
                  {/* signup submite button */}
                  <a href="#" className="btn" onClick={handleSubmit}>
                    submit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
