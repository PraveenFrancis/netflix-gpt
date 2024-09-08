import React from 'react'

const VideoTittle = ({title, overview}) => {
  return (
    <div className='pt-[20%] pl-12 absolute bg-gradient-to-r from-black text-white aspect-video w-screen'>
        <h1 className='text-l md:text-6xl'>{title}</h1>
        <p className='w-1/4 m-2 hidden md:inline-block'>{overview}</p>
        <div>
            <button className=' bg-white text-black text-lg rounded-md  px-[3px] py-[3px] m-2 hover:bg-opacity-50 md:px-4 md:py-2'>Play Movie</button>
            <button className='px-4 bg-gray-500 text-black text-lg rounded-md py-2 m-2 hidden md:inline-block'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTittle