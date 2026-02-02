import React from 'react'
import { Link } from 'react-router-dom'
function Navigation() {
  return (
    <div className='navbar'>
    <Link to='' className='nav'>Home</Link>
    <Link to='' className='nav'>About Us</Link>
    <Link to='' className='nav'>Contact Us</Link>
    <Link to='' className='nav'>Services</Link>
      
    </div>
  )
}

export default Navigation
