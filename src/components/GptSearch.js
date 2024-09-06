import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSeachBar from "./GptSeachBar";
import { LOGO_URL } from "../utils/constants";
const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={LOGO_URL}
          alt=""
        />
      </div>
      <GptSeachBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
