import React,{useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";import { useState } from "react";
import "./Login.css";
import { Navbar } from "../components";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
 
  useEffect(() => {
    Aos.init({duration:2000});
  },[]);

  const navigate = useNavigate();
  
// =============================LOGIN SECTION=============================

const [values2 , setValues2] = useState(
  {
    email2:"",
    password2:"",
  }
);
//login - error message handler
const[logInError, setlogInError] = useState('');


  //change handler - login
  const handleInputChange2 = (event) => {
    setValues2({
      ...values2,
      [event.target.name]: event.target.value,
    });
  };

  //
  //login - submit handler
  const handleSubmit2 = () => {
    console.log(values2);
    signInWithEmailAndPassword(auth, values2.email2, values2.password2)
      .then(async(res) => {
        console.log(res);
        const user = res.user;
        console.log(user);
        navigate('/');
        alert('Logged in successfully')
      })
      .catch((loginError) => {
        console.log(loginError);
        setlogInError(loginError.message);
      });
  };

// XXXXXXXXXXXXXXXXXXXXXX LOGIN SECTION XXXXXXXXXXXXXXXXXXXXXX

// =============================SIGNUP SECTION=============================
  //variables for signup section
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  //signup error message error
  const[signUpError, setSignUpError] = useState('');
  //change handler - signup
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


  // XXXXXXXXXXXXXXXXXXXXXX SIGNUP SECTION XXXXXXXXXXXXXXXXXXXXXX

  return (
    <>
      <Navbar />
      <div className="form" >
        <div className="text-center">
          <h6>
            <span data-aos = "fade">Log In</span> <span data-aos = "fade">Sign Up</span>
          </h6>

          <input type="checkbox" className="checkbox" id="reg-log" />
          <label for="reg-log"></label>
          <div className="card-3d-wrap">
            <div className="card-3d-wrapper">
              {/* =====================LOGIN FORM===================== */}
              {/* <form></form> */}
              <div className="card-front" >
                <div className="center-wrap">
                  <h4 className="heading" data-aos = "fade">Log In</h4>

                  {/* login email */}
                  <div className="form-group" data-aos = "fade">
                    <input
                      type="email"
                      className="form-style"
                      placeholder="Your Email"
                      required
                      //required attributes for taking the input 
                      name="email2"
                      value={values2.email2}
                      onChange={handleInputChange2}

                    />
                    <i className="input-icon material-icons">alternate_email</i>
                  </div>

                  {/* login password */}
                  <div className="form-group" data-aos = "fade">
                    <input
                      type="password"
                      className="form-style"
                      placeholder="Your Password"
                      required
                      //required attributes for taking the input 
                      name="password2"
                      value={values2.password2}
                      onChange={handleInputChange2}
                    />
                    <i className="input-icon material-icons">lock</i>
                  </div>
                  <button>
                    <a href="">google sign in</a>
                  </button>
                  <br />
                  <h3>{logInError}</h3>
                  <a href="#" className="btn" onClick={handleSubmit2} data-aos = "fade">
                    submit
                  </a>
                  <p className="text-center">
                    <a href="#" className="link" >
                      Forgot your password
                    </a>
                  </p>
                </div>
              </div>

              {/* ===============signUp====================== */}
              <div className="card-back">
                <div className="center-wrap">
                  <h4 className="heading" data-aos = "fade">Sign Up</h4>

                  {/* signup name */}
                  <div className="form-group" data-aos = "fade">
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
                  <div className="form-group" data-aos = "fade">
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
                  <div className="form-group" data-aos = "fade">
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
                  <a href="#" className="btn" onClick={handleSubmit} data-aos = "fade">
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
