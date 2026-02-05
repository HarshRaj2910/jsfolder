import React, { useRef, useState } from "react";
import { data, Link, Outlet } from "react-router-dom";
// import "./Contact.css";
function Contact() {
  const [value,setValue]=useState('');
  const [data,setData]=useState('');


  const inputref=useRef(null);
  const handleChange=(e)=>{
        setValue(e.target.value);

  }
  const handleSubmit=(e)=>{
        e.preventDefault();
        alert('A name was submitted:' + inputref.current.value);
        setData(inputref.current.value);

  }


  return (
    <div style={{ textAlign: "center", marginTop: "18px", padding: "12px" }}>
      <Link to="profile" style={{padding:"14px",
      backgroundColor:"coral", color:"#9d4343",
      textDecoration:"none",borderRadius:"5px"}}>Profile</Link>

      <Link to="accounts" style={{padding:"14px",
      backgroundColor:"#20baba", color:"#1717ff",
      textDecoration:"none", marginLeft:"12px",
      border:"none",borderRadius:"5px"}}>Accounts</Link>

      <Outlet />
      <hr/>
      <h2> Controlled Form </h2>
          <form>
            <input type='text'
            name='name'
            value={value}
            onChange={handleChange}
            placeholder='Enter Name'/>
            <button type='submit'> Click </button>
          </form>
          <h3>
            {value}
          </h3>
          <hr/>
          <h2>
            Uncontrolled Form</h2>
            <form onSubmit={handleSubmit}>
            <input type='text' ref={inputref} placeholder='Enter Name' />
            <button type='Submit'> Click</button>
             </form>
             <h3>{data}</h3>
            
        

    </div>
  );
}

export default Contact;