import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector} from "react-redux"
import {  addPopularMovies } from "../utils/store/moviesSlice";
import  { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch()
    const popularMovie = useSelector( (store) => store.movies.popularMovie)
    const getPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addPopularMovies(json.results))
  
    };
    useEffect(() => {
      !popularMovie && getPopularMovies()
    }, []);
}

export default usePopularMovies