
import React, { useState } from 'react'

export default function ConditionalRendering() {
    // chechked fpr use logged in or out
    const [logged ,setLogged] = useState(true)
  return (
    <div>
        <h1>Conditional Rendering</h1>
        {
            logged ? <h1>Welcome Rahul </h1>
            : <h2>Welcome Guest</h2>
        }

        <button style={{fontSize : "1.5rem", fontWeight: "bolder"} }  onClick={()=>setLogged(!logged)}>Sign In & Sign Out</button>
        

    </div>
  )
}
