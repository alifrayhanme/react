import React, { useState } from 'react'


export const Count = () => {
  const [count, setCount] = useState(0);
  
  function increment() {
    setCount((prevCount)=>prevCount + 1)
    setCount((prevCount)=>prevCount + 1)
    setCount((prevCount)=>prevCount + 1)
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <div>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  )
}
