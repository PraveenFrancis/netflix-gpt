import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector} from "react-redux"
import { addNowPlayingMovies } from "../utils/store/moviesSlice";
import  { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const nowPlayingMovie = useSelector( (store) => store.movies.nowPlayingMovie)
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results))
  
    };
    useEffect(() => {
      !nowPlayingMovie && getNowPlayingMovies()
    }, []);
}

export default useNowPlayingMovies