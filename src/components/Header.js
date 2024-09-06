import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleGpt } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changelanguage } from "../utils/configSlice";
const Header = () => {
  const disptch = useDispatch()
  const navigate = useNavigate();
  const signOut = () => {
    navigate("/Login");
  };
  const handleGptSearch = () =>{
    disptch(toggleGpt())
  }
  const handleChangelanguage = (e) =>{
    disptch(changelanguage(e.target.value))
  }
  const gptButton = useSelector( (store) => store.gpt.showGptButton)
  return (
    <div className="absolute w-screen flex justify-between px-8 py-4 bg-gradient-to-b from-black z-10">
      <img
        className="w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt=""
      /> 
      <div className="flex p-2 text-white justify-between">
        {gptButton &&  <select className="p-2 m-2 bg-gray-900" onChange={handleChangelanguage}>
        {SUPPORTED_LANGUAGES.map((lang) => (
          <option key={lang.identifier} value={lang.identifier}>
            {lang.name}
          </option>
        ))}
        </select>}
       
        <button className="cursor-pointer mx-4" onClick={handleGptSearch}>{gptButton ? "Home": "Gpt Search"}</button>
        <button className="cursor-pointer" onClick={signOut}>
          Singout
        </button>
      </div>
    </div>
  );
};

export default Header;
