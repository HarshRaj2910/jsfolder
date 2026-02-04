import React, { use } from 'react'
import { Outlet,Link } from 'react-router-dom'
import { useState } from 'react'


function Contact() {
  const [value,setvalue]=useState('');
  const handleChange=(e)=>{
      setvalue(e.target.value);
  }
  const handleSubmit=(e)=>{

  }
  return (
    <div style={{textAlign:"center",marginTop: "18px",padding:"12px"}}>
      <Link to='profile'  style={{padding: "14px",background:"coral",color: "#fff",
      textDecoration: "none"}}>Profile</Link>
      <Link to='accounts' style={{padding: "14px",background:"coral",color: "#fff",
      textDecoration: "none",marginLeft:"12px",border:"none",borderRadius:"5px"}}>Accounts</Link>
      <Outlet/>
      <hr/>
      <form onSubmit={handleSubmit}>
        <input type='text' 
        name='name'
        value={value}
        onChange={handleChange}
        placeholder='Enter Name'/>
        <button type='submit'>Click</button>
      </form>
      <h3>{value}</h3>

    </div>
  )
}

export default Contact
