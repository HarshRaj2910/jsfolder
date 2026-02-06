import React from 'react'
import './AddData.css'
import { useState } from 'react';
function AddData() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        country: '',
        gender: ''
  });
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value});

  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
        const response=await fetch("http://localhost:5000/api/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        });
        const data=await response.json();
        
        if(response.ok){
            alert("Registration successful!");
            setFormData({
            name:'',
            email:'',
            password:'',
            country:'',
            gender:''
        });
        }else{
            alert("Registration failed!");
        }
    }catch(error){
        console.error('Error:',error);
        alert('Something went wrong!');
    }
  }
  return (
    <div className='form-container'> 
    <h2>Registration Form</h2>
    <form onSubmit={handleSubmit}>
        <div className='form-group'>
            <label htmlFor='Name'>Name:</label>
            <input 
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="Enter your name"
            required
            /> 
        </div>
         <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input 
            type="email"
            name="email"
             onChange={handleChange}
            value={formData.email}
            id="email"
           
            placeholder="Enter your email"
            required
            /> 
        </div>
        <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input 
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            id="password"
            
            placeholder="Enter your password"
            required
            /> 
        </div>
         <div className='form-group'>
            <label >Country:</label>
            <select name="country" required 
            onChange={handleChange} value={formData.country}>
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
            </select>
        </div>
        <div className='form-group'>
        <label>Gender:</label>
        <div className='radio-group'>
            <label>
                <input
                type="radio"
                name="gender"
                value="male"
                required
                onChange={handleChange} 
                checked={formData.gender === 'male'} 
                /> Male
            </label>
            <label>
                <input
                type="radio"
                name="gender"
                value="female"
                required
                onChange={handleChange} 
                checked={formData.gender === 'female'} 
                /> Female
            </label>
            <label>
                <input type="radio"
                name="gender"
                value="other"
                required
                onChange={handleChange} checked={formData.gender === 'other'} 
                /> Other    
            </label>
           
        </div>

        </div>
        <button type="submit" className='btn btn-submit'>Submit</button>

    </form>
      
    </div>
  )
}

export default AddData
