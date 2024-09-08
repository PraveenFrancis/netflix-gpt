import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/store/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = ({ movie_id }) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector( (store) => store.movies.trailer)
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movie_id +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterdData = await json?.results.filter(
      (data) => data.type === "Trailer"
    );
    const trailer = filterdData.length ? filterdData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !movieTrailer && getMovieVideos();
  }, []);
};
export default useMovieTrailer;
