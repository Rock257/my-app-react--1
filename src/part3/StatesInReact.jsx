import React, { useState } from "react";

function StatesInReact(){
    
    const [name ,setName] = useState("Cavin")

    const [count ,setCount] = useState(0)

    const [value ,setValue] = useState("This is the previous state will  update by state varible in react on mpuse move")
 
    // first

    const updateName =()=>{
        setName('Pooja')
        console.log(name)
    }
    // console.log('____')

    // second 


    const incre = ()=>{
        setCount(count+1)
    }

    const decre = ()=>{
        setCount(count-1)
    }

    // third 

    const myUpFun =()=>{
        setValue("State Changed")
    }

    return(
        <>
        <h1>{name}</h1>
        <button onClick={updateName}>Update Name</button>
        <br />
        <br />

        <button onClick={decre}>-</button>

        <button>{count}</button>
  
        <button onClick={()=>incre()}>+</button>
        {console.log(count)}
        
        <br />
        <br />
        <div onMouseMove={myUpFun} >
            <h1>{value}</h1>
        </div>
        

        </>
    )
}

export default StatesInReact ;

// thats how state works in React to update the varibale 
// check console for more  as the component  rerender when we click the button 