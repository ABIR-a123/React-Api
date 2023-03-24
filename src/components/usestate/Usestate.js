
import React, { useState } from 'react'
import './usestate.css'

const Usestate = () => {
    const [count,setCount]=useState(0);

    const increment =()=>{
      setCount(count+1)
    }
    const Decrement = ()=>{
      setCount(count-1)
    }
  return (
   <>
   <div className='body'>
      <h1>Learning React js hoook</h1>
      <h2>count {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
   </>
  )
}

export default Usestate