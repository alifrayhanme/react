import React, { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        // batch update
        setCount((pervCount)=> pervCount + 1)
        setCount((pervCount)=> pervCount + 1)
        setCount((pervCount)=> pervCount + 1)
        
        // re-render
    }
  return (
    <div className='text-center'>
        <h2 className='text-2xl'>Count: {count}</h2>
        <button onClick={increment} className='bg-amber-600 p-1 rounded-lg text-white'>Increment</button>
    </div>
  )
}
