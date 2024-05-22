
import React, { useState } from 'react'

export default function ConditionalRendering() {
    // chechked fpr use logged in or out
    
    // const [logged ,setLogged] = useState(false)
    const [logged ,setLogged] = useState(2)
    // const [input ,setInput] = useState()

  return (
    <div>
        {/* <h1>Conditional Rendering</h1>
        {
            logged ? <h1>Welcome Rahul </h1>
            : <h2>Welcome Guest</h2>
        }

        <button style={{fontSize : "1.5rem", fontWeight: "bolder", borderRadius: "5rem"} }  onClick={()=>setLogged(!logged)}>Sign In & Sign Out</button> */}

        {/* for more than 2 condition */}

{/* <input type="text" placeholder='Please enter your user code' onChange={(e)=>setInput(e.target.value)}/>
<br /><br />

<button onSubmit={()=>setLogged(input)}>submit</button>
{/* {console.log(e.target.value)} */}
{/* {console.log(input)} */}

        {
            logged == 1? <h1>Hello User 1</h1> :
            logged ==2? <h1>Hello User 2 </h1>:
            logged ==3 ? <h1>Hello User 3</h1> :
            <h1>You are not authorised to come here please enter your user code</h1>
        }

    </div>
  )
}
