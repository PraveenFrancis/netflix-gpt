import React from 'react'
import VideoTittle from './VideoTittle'
import VideoBackground from './VideoBackground'
import { useSelector} from 'react-redux'

const MainContainer = () => {
    const movies = useSelector( store => store.movies?.nowPlayingMovies)
    if(!movies) return;
    const mainMovie = movies[0]
    const { original_title, overview, id} = mainMovie

  return (
    <div className='pt-[35%] bg-black md:pt-0'>
        <VideoTittle title={original_title} overview={overview}></VideoTittle>
        <VideoBackground movie_id={id}></VideoBackground>
    </div>
  )
}

export default MainContainer