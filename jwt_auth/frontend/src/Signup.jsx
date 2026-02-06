

function Signup() {
    return(
        <div className='form-container'> 
    <h2>Registration Form</h2>
    <form >
        <div className='form-group'>
            <label htmlFor='Name'>Name:</label>
            <input 
            type="text"
            name="name"
            id="name"
            
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
            
            placeholder="Enter your password"
            required
            /> 
        </div>
         
        
        <button type="submit" className='btn btn-submit'>Submit</button>

    </form>
      
    </div>
  )
}