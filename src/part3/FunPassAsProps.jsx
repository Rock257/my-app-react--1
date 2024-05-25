import React, { useState } from 'react'

export default function FunPassAsProps(props) {

    const [ status ,setStatus] = useState('')
  return (
    <div className='main'>
        <h1>Pass function as props to the another component</h1>
        <h1>{status}</h1>
        <button onClick={props.data}  onMouseEnter = {()=>setStatus("Mouse hovering on button ")}>Click Here</button>
    </div>
  )
}

// when we need to use one function to the differnet different component 
