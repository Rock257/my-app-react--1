import React from "react";

function EventLearn() {
  let name = "Rahul(The Rock)";
  const appFun1 = () => {
   
    alert("Hello React ");
    //  name =  'sam'
    //  alert(name);
    // as after  changing the name name not change when click btn 
  };

  return (
    <>
      <h1>Event handling</h1>
      <h3>By {name}</h3>
      {/*  different method to called function */}
      <button onClick={appFun1}>Create Alert</button>
      {/* <button onClick={alert('Helo Auto try arrow func to avoid auto call')}>auto clicked</button> */}
      <button onClick={() => appFun1()}> arrow function used</button>
      <button
        onClick={() => {
          alert("arrow function used ");
        }}
      >
        Click to aviod autp call{" "}
      </button>
    </>
  );
}

export default EventLearn;
