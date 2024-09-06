import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, tittle }) => {
  // console.log(movies);
if(!movies) return
  return (
    <div className="px-4 ">
      <h1 className="text-2xl py-2 text-white">{tittle}</h1>

      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              poster_path={movie.poster_path}
            ></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
