import React, { useState }  from "react";

function BasicForm(){

    const getFormData =(e)=>{
        console.warn(name ,email,contact,oi ,tnc)
        e.preventDefault()
    }
    // getFormData will  stop the submittion of form when we click the submit form the rending dom again again when we click the submit form  

    // define states for onput elemnt 

    const [name ,setName] = useState('');
    const [email ,setEmail] = useState('');
    const [contact, setContact]  = useState('')
    const [tnc, setTnc] = useState(false)
    const [oi ,setOi]  = useState('')

    return(
        <>
        <div className="main">
            <h1>Form In React</h1>
            <form action="" onSubmit={getFormData}>
                <input type="text" name="" id=""placeholder="Name" onChange={(e)=>setName(e.target.value)} />
                <br /> <br />
                <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                <br /> <br />
                <input type="number" placeholder="Contact No." onChange={(e)=>setContact(e.target.value)} />
                <br /> <br />
                <select onChange={(e)=>setOi(e.target.value)}>
                    <option >Select Option</option>
                    <option >Marvel</option>
                    <option >DC</option>
                </select>
                <br /><br />
                <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/> <span>Accept terms and condition</span>
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}

export default BasicForm