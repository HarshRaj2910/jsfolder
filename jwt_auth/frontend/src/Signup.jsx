import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from './utils';
import  './Signup.css'
// import { signup } from '../../Backend/Controllers/AuthController';

function Signup() {
    const [signupInfo, setSignupInfo]=useState({
        name:'',
        email:'',
        password:''
    });
    const navigate=useNavigate();
    const handleChange=(e)=>{
        const {name, value}=e.target;
        const copySignupInfo={ ...signupInfo};
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    }

    const handleSignup=async (e)=>{
        e.preventDefault();
        const { name,email,password }= signupInfo;

        try{
            const url=`http://localhost:8000/auth/signup`;
            const response=await fetch(url, {
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(signupInfo)
            });
            const result=await response.json();
            const { success, message, error }=result;
            if(success){ 
                handleSuccess(message);
                setTimeout(()=>{
                    navigate('/login')
                }, 2000)
            }else if(error){
                const details=error?.details[0].message;
                handleError(details);
            }else if(!success){
                handleError(message);
            }
        }catch(err){
            handleError(err);
        }
    }
    return(
        <div className='form-container'> 
            <h2>Registration Form</h2>
            <form  onSubmit={handleSignup}>
             <div className='form-group'>
            <label htmlFor='name'>Name:</label>
            <input 
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={signupInfo.name}
            placeholder="Enter your name"
            required
            /> 
        </div>
         <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input 
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={signupInfo.email}
           
            placeholder="Enter your email"
            required
            /> 
        </div>
        <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input 
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={signupInfo.password}
            
            placeholder="Enter your password"
            required
            /> 
        </div>
         
        
        <button type="submit" className='btn btn-submit'>Submit</button>

    </form>
      
    </div>
  )
}

export default Signup