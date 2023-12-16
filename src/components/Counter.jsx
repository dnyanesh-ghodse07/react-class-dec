import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)

    const handleIncrease = () => {
        setCount(prev => prev + 1)
    }

    const handleDecrease = () => {
        setCount(prev => prev - 1)
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
    </div>
  )
}

export default Counter