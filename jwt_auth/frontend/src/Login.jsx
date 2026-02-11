import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from './utils';
import  './Login.css'
// import { signup } from '../../Backend/Controllers/AuthController';

function Login() {
    const [loginInfo, setLoginInfo]=useState({
        
        email:'',
        password:''
    });
    const navigate=useNavigate();
    const handleChange=(e)=>{
        const {name, value}=e.target;
        const copyLoginInfo={ ...loginInfo};
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    }

    const handleLogin=async (e)=>{
        e.preventDefault();
        const { email,password }= loginInfo;

        try{
            const url=`http://localhost:8000/auth/signup`;
            const response=await fetch(url, {
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(loginInfo)
            });
            const result=await response.json();
            const { success, message,jwtToken,name ,error }=result;
            if(success){ 
                handleSuccess(message);
                localStorage.setItem('token',jwtToken);
                localStorage.setItem('loggesInUser',name);
                setTimeout(()=>{
                    navigate('/home')
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
        // <div className='form-container'> 
        //     <h2>Login Form</h2>
        //     <form  onSubmit={handleLogin}>
        //      <div className='form-group'>
        //     <label htmlFor='name'>Name:</label>
        //     <input 
        //     type="text"
        //     name="name"
        //     id="name"
        //     onChange={handleChange}
        //     value={loginInfo.name}
        //     placeholder="Enter your name"
        //     required
        //     /> 
        // </div>
         <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input 
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={loginInfo.email}
           
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
            value={loginInfo.password}
            
            placeholder="Enter your password"
            required
            /> 
        </div>
         
        
        <button type="submit" className='btn btn-submit'>Submit</button>

    </form>
      
    </div>
  )
}

export default Login