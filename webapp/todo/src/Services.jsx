import React,{ useState} from 'react'

function Services() {
    const[value,setValue]=useState(0);
    const handleIncrement=()=>{
        setValue(value+1);
    }
    const handleDecrement=()=>{
        setValue(value-1);
    }
    console.log("Value", value)
  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <h2>Value: {value}</h2>
    </div>
  )
}

export default Services
