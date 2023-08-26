import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import "../styles/Navbar.css"
import { BiMenu } from 'react-icons/bi'

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setExpandNavbar(false)
        window.scrollTo(0,0)
    },[location])

    if (expandNavbar) window.scrollTo(0,0)

  return (
    <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
        <div className='links font-inter text-xl lg:text-2xl'>
            <NavLink to={'/new-portfolio'}> Home </NavLink>
            <NavLink to={'/about'}> About </NavLink>
            <NavLink to={'/projects'}> Projects </NavLink>
            <NavLink to={'/skills'}> Skills </NavLink>
            <NavLink to={'/experience'}> Experience </NavLink>
            <NavLink to={'/contact'}> Contact </NavLink>
        </div>
        <div className='toggleButton'>
            <button onClick={() => setExpandNavbar((prev) => !prev)}> 
                <BiMenu/> 
            </button>
        </div>
    </div>
  )
}

export default Navbar