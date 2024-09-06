import React, { useRef, useState } from "react";
import Header from "./Header";
import {checkValidData} from "./../utils/validate"
import {useNavigate} from "react-router-dom"
import { LOGO_URL } from "../utils/constants";
const Login = () => {
  const user =  {
    email: "praveen@gmail.com",
    password: "Welcom@123"
  }
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()
  const toggleButton = () => {
    setSignInForm(!isSignInForm)
  }

  const email = useRef(null);
  const password = useRef(null)
  const validateForm = () => {
    const data = checkValidData(email.current.value, password.current.value)
    setErrorMessage(data)
    if(data) return;

    if(email.current.value === user.email && password.current.value === user.password) {
      navigate("/browse")
    }
    // console.log(data)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={LOGO_URL}
          alt=""
        />
      </div>
      <form onSubmit={ (e) => e.preventDefault()} action="" className="absolute p-10 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm?  "Sign In" : "Sing Up"}</h1>
        <input type="text" ref={email} className="p-2 my-2 w-full bg-gray-700" placeholder="email"/>
        {!isSignInForm && <input type="text" className="p-2 my-2 w-full bg-gray-700" placeholder="Full Name"/>}

        <input type="text" ref={password} className="p-2 my-2 w-full bg-gray-700" placeholder="password"/>
        <p className="py-2 text-red-600">{errorMessage}</p>
        <button className="p-2 my-4 bg-red-700 w-full" onClick={validateForm}>{isSignInForm?  "Sign In" : "Sing Up"}</button>
        <p className="py-2 cursor-pointer" onClick={toggleButton}>
          New to Netflix? Sign Up Now
        </p>
      </form>
    </div>
  );
};

export default Login;
