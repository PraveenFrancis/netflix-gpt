import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openai"
const GptSeachBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchVal = useRef(null)
  const handleGptSearch =async () =>{
    const query = "Act as a movie recommentation system and suggest some movies for the query" + searchVal.current.value
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: query}],
      model: 'gpt-3.5-turbo',
    });
    console.log(gptResults.choices)
  }
  return (
    <div className="flex justify-center pt-[10%]">
      <form className="w-1/2  bg-black grid grid-cols-12" onSubmit={ (e) => e.preventDefault()}>
        <input
        ref={searchVal}
          type="text"
          className="col-span-9 p-2 m-2"
          placeholder={lang[langKey].placeHolder}
        />
        <button className="bg-red-600 col-span-3 p-2 m-2 rounded-lg" onClick={handleGptSearch}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSeachBar;
