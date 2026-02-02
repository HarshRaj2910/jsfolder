import React from 'react'
import { Outlet,Link } from 'react-router-dom'


function Contact() {
  return (
    <div>
      <Link to='profile'>Profile</Link>
      <Link to='accounts'>Accounts</Link>
      <Outlet/>
    </div>
  )
}

export default Contact
