import React from 'react'
import { Outlet,Link } from 'react-router-dom'


function Contact() {
  return (
    <div style={{textAlign:"center",marginTop: "18px",padding:"12px"}}>
      <Link to='profile'  style={{padding: "14px",background:"coral",color: "#fff",
      textDecoration: "none"}}>Profile</Link>
      <Link to='accounts' style={{padding: "14px",background:"coral",color: "#fff",
      textDecoration: "none",marginLeft:"12px",border:"none",borderRadius:"5px"}}>Accounts</Link>
      <Outlet/>
    </div>
  )
}

export default Contact
