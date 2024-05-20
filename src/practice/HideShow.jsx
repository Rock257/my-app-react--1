import React from "react"; 
import { useState } from "react";

function HideShow(props){

    const [show ,setShow] = useState(false)


    return(
        <>
        <h1>Hello this is me click Button to see my info</h1>
         {
            show ?
            (
            <h1>
            Name  :{props.name}
            <br />
            Phone  :{props.contactNo}
            <br />
            E-mail  : {props.email}
            </h1>
         ) 
         :
         null
         }
         <button onClick={()=>setShow(true)}>Click Me</button>
         <button onClick={()=>setShow(false)}>Hide Me</button>
        </>
    )
}

export default HideShow