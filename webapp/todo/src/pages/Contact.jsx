import React from 'react'
import { Outlet,Link } from 'react-router-dom'


function Contact() {
  return (
    <div style={{textAlign:"center",marginTop: "18px",padding:"12px"}}>
      <Link to='profile'>Profile</Link>
      <Link to='accounts'>Accounts</Link>
      <Outlet/>
    </div>
  )
}

export default Contact
