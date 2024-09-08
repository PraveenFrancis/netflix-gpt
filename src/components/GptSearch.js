import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSeachBar from "./GptSeachBar";
import { LOGO_URL } from "../utils/constants";
const GptSearch = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img className="h-screen object-cover md:h-auto" src={LOGO_URL} alt="" />
      </div>
      <div className="pt-[40%] md:pt-0" >
        <GptSeachBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
