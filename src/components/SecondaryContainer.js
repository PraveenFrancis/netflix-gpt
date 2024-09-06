import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-52 relative z-20">
          <MovieList movies={movies?.nowPlayingMovies} tittle={"Now Playing"}></MovieList>
          <MovieList movies={movies?.popularMovies} tittle={"Popular Movies"}></MovieList>
          <MovieList movies={movies?.nowPlayingMovies} tittle={"Horror"}></MovieList>
          <MovieList movies={movies?.nowPlayingMovies} tittle={"Action"}></MovieList>
          <MovieList movies={movies?.nowPlayingMovies} tittle={"Romantic"}></MovieList>
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
