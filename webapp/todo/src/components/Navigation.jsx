import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'
function Navigation() {
  return (
    <div className='navbar'>
    <Link to='/' className='nav'>Home</Link>
    <Link to='/about' className='nav'>About Us</Link>
    <Link to='/contact' className='nav'>Contact Us</Link>
    <Link to='/services' className='nav'>Services</Link>
      
    </div>
  )
}

export default Navigation
