import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const toggleButton = () => {
    setSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
      </div>
      <form action="" className="absolute p-10 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm?  "Sign In" : "Sing Up"}</h1>
        <input type="text" className="p-2 my-2 w-full bg-gray-700" placeholder="email"/>
        {!isSignInForm && <input type="text" className="p-2 my-2 w-full bg-gray-700" placeholder="Full Name"/>}

        <input type="text" className="p-2 my-2 w-full bg-gray-700" placeholder="password"/>
        <button className="p-2 my-4 bg-red-700 w-full">{isSignInForm?  "Sign In" : "Sing Up"}</button>
        <p className="py-2 cursor-pointer" onClick={toggleButton}>
          New to Netflix? Sign Up Now
        </p>
      </form>
    </div>
  );
};

export default Login;
