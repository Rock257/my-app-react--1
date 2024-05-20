import React, { useState } from "react";

export default function GetInput() {

    const [data ,setData] = useState(null) ;

    const [print ,setPrint] = useState(false) ;
 
  const getData = (val) => {
    console.log(val)  // dom reprint onChange
    console.log(val.target)  //  target i.e image reprint  onChange
    console.log(val.target.value) // target value print onChange
    setData(val.target.value);
  };


  return (
    
    <>
      <div className="main">

        <h1>Get value from input feild </h1>

        <h1>{data}</h1>
        <label htmlFor="name">Name </label>
        <input type="text" onChange={getData} />
        <br />
        <label htmlFor="email">E-Mail</label>
        <input type="text" onChange={getData} />
        <br />
        <button onClick={()=>setPrint(true)}>Print here</button>


        {
            print? 
            <h1>{data}</h1>: 
            null
        }

      </div>
    </>
  );
}
