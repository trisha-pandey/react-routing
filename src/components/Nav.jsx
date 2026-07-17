import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-center p-3 text-white  gap-8 border-b border-white text-xs font-medium'>
        <NavLink className={(e)=>e.isActive? "text-pink-300" : ""} to="/">Home</NavLink>
        <NavLink className={(e)=>e.isActive? "text-pink-300" : ""} to="/Product">Product</NavLink>
        <NavLink className={(e)=>e.isActive? "text-pink-300" : ""} to="/Service">Service</NavLink>
        <NavLink className={(e)=>e.isActive? "text-pink-300" : ""} to="/About">About</NavLink>
    </div>
  )
}

export default Nav