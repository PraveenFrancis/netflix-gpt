import React from 'react'
import {useNavigate} from "react-router-dom"

const Header = () => {
  const navigate = useNavigate()
  const signOut = () =>{
    navigate('/Login')
  }
  return (
    <div className='absolute w-screen flex justify-between px-8 py-4 bg-gradient-to-b from-black z-10'>
      <img className='w-48' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
      <div className='flex'>
        <button className='cursor-pointer' onClick={signOut}>Singout</button>
      </div>
    </div>
  )
}

export default Header