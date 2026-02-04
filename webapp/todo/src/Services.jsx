import React, { use, useEffect, useState } from 'react'

function Services() {
    const [value, setValue] = useState(0);
    const [count, setCount] = useState(0);
    useEffect(() => {
      console.log("Component Mounted");
      return () => {
        console.log("Component Unmounted");
      };
    },[]);
    useEffect(() => {
      if(count !== 0)
      {
        console.log(`Services Component Updated - Count is now : ${count}`)
      }
    },[count]);
    const handleIncrement = () => {
        setValue(value+1);
    }
    const handleDecrement = () => {
        setValue(value-1);
    }
    useEffect(() => {
      document.title = `Count : ${count}`;
      console.log(count);
    },[value]);
    // }); // runs after every render
    // }, [count]); // runs only when count changes
  return (
    <div style={{textAlign: "center", marginTop: "18px", padding: "12px"}}>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <h2>{value}</h2> 
      <hr/>
      <h2>Component Lifecycle</h2>
      <h2>Count : {count}</h2> 
       <button onClick={() => setCount(count+1)}>Increase Count</button> 
    </div>
  )
}

export default Services