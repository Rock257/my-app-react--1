import React, { useState } from "react"; 

export default function Test(){
    const [data ,setData] = useState(false)
    return(
        <>
        <div className="test">
            <h1>Test File</h1>
            {
                
                    (data? <h1>Hello This is me Rahul</h1> 
                    : null)
            
            }
            <button onClick={()=>setData(!data)}>Toggle</button>
        </div>
        </>
        
    )
}