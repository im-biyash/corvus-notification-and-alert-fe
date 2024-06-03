"use client"
import React from 'react'
const Navbar = () => {
  return (
   
    <nav className='flex justify-between items-center p-2 '>
      <div className="logo">
          <img src = "" className ="h-11 w-auto" alt="" />
      </div>
      <ul className='flex gap-3 p-2 font-semibold'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>  
        <li>Blog</li>
      </ul>
     
`    </nav>
  )
}

export default Navbar
