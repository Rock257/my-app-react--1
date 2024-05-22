import React from "react";
import { useState } from "react";
import hannah from '../img/hannah.jpg'

function Toggle(){

    const [data ,setData] = useState(true ); 

    return(
        <>   
        <h1>Click  to hide her details </h1>
        <img src={hannah} alt="" style={{height: "200px", width: "300px"}} />
        {
            data?
                (<h1>
                Name : Katherine langford
                <br />
                Profession : Actress
                <br />
                Origin : Australia
                <br />
                Status : Single
            </h1> ) 
            : null
        }
        {/* <button onClick={()=>setData(false)} onDoubleClick={()=>setData(true)}>Hide & Sho</button> */}
        <button onClick={()=>setData(!data)}>Toggle</button>
        {/* to toggle use opp. state of the current state in setData  */}
        </>
    )
}

export default Toggle;