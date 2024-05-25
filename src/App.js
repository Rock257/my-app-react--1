import { useState } from "react";
import "./App.css";
// import ConditionalRendering from './part3/ConditionalRendering';

// import User from './userFile/User';
// import { Test } from './userFile/Test';
// import UserName from './classComp/UserClass';
// import EventLearn from './part3/EventLearn';
// import StatesInReact from './part3/StatesInReact'
// import Whystate from './part3/Whystate';
// import StateClass from './classComp/StateClass';
// import LearnProps from './part3/LearnProps';
// import ClassProps from './part3/ClassProps'

// import GetInput from './practice/GetInput';
// import HideShow from './practice/HideShow';
// import Toggle from  './practice/Toggle'
// import BasicForm from './practice/BasicForm';
// import Test from './practice/Test';
// import FunPassAsProps from './part3/FunPassAsProps';

// import FirstOne from './lifeCycleMehod/FirstOne';
// import First from './lifeCycleMehod/Class/First';
// import { Second } from "./lifeCycleMehod/Class/Second";
// import Third from "./lifeCycleMehod/Class/Third";
// import FirstUpdate from "./lifeCycleMehod/Class/componentDidUpdate/FirstUpdate";

// import ShouldComponentUp from "./lifeCycleMehod/Class/componentDidUpdate/ShouldComponentUp";

import Parent from "./lifeCycleMehod/Class/Parent";


function HeyBaby(props) {
  return (
    <>
      <h1>Baby Name is {props.name}</h1>
      <h3>no export required same page</h3>
    </>
  );
}
function App() {
  // sendin veriable through props
  const babyName = "shivika";

  const userDetails = {
    name: "Shiv",
    place: "Kailash Parvat",
    work: "Meditation",
  };

  const student = {
    name: "Rahul",
    qualification: "B.Tech",
    isMarried: false,
    currentJob: "non IT",
  };

  // for props update

  const [name, setName] = useState("Sanjay");
  const [email, setEmail] = useState("rajsharma233@gmail.com");
  const [salary, setSalary] = useState("1 Lakh Rs");

  // const [add ,setAdd] = useState('Shastri-Nagar')

  function updateAll() {
    setName("Raj");
    setEmail("Rajdejf39@gmail.com");
    setSalary("88k");
    // setAdd("Rajiv Nagar")
  }

  // passing function as props to the component

  // const getData =()=>{
  //   console.log("function called in  in another componet ")
  // }

  return (
    <div className="App">
      <h1>Hello React </h1>
      {/* sending object as props */}
      {/* <User name = "Rahul" userDet = {userDetails}/> */}

      {/* <User/>
      <Test/>
      
      
      <HeyBaby name = {babyName}/>
      <UserName/> */}
      <br />
      {/* <EventLearn/> */}
      <br />
      {/* <Whystate/> */}
      <br />
      {/* <StatesInReact/> */}
      <br />
      {/* <StateClass/> */}

      <br />

      {/* <LearnProps 
      name = {name}  
      email ={email}  
      salary ={salary} 
      // other = {[address={add} ,country = "India" ]}
      />
      <button onClick={()=>updateAll()} >Click to update student data</button>
       */}

      {/* <LearnProps data = {student}  name = {'Abhi'}  email ='abhi82@gmail.com'  salary =' 1 lakh Rs' other = {{address:"Shastri-Nagar" ,country : "India" }}/>
      
      <LearnProps data = {student}  name = {'Sanjay'}  email ='sanj0932@gmail.com'  salary ='80k Rs' other = {{address:"Shastri-Nagar" ,country : "India" }}/> */}

      <br />

      {/* <h1>Hello Here Props in class Component</h1>
      <ClassProps empName = 'TCS' name = 'Dristi Sharma' email ='sharmaDristi@gmail.com'/>
      <ClassProps empName = "Microsoft" name  = "Rahul Soni" email = 'soni86541@gmail.com' /> */}

      <br />

      {/* <GetInput/>  */}

      {/* <HideShow name = 'Rahul Soni' contactNo = "6376609618" email = "soni9761@gmail.com"/> */}
      {/* <Toggle/> */}
      {/* <BasicForm/> */}
      {/* <ConditionalRendering/> */}
      {/* <Test></Test> */}
      {/* <FunPassAsProps data ={()=>getData()}/> */}

      {/* <FirstOne/> */}
      {/* <First></First> */}

      {/* <Second name={name}  email = {email} />
      <button onClick={() => setName("Katherine Langford")}>
        {" "}
        Update State{" "}
      </button> */}

      {/* thirdCompodentDidMount */}
      {/* <Third></Third> */}
      {/* <FirstUpdate status = "Active"></FirstUpdate> */}
      {/* <ShouldComponentUp/> */}


      <Parent></Parent>



  
    </div>
  );
}

export default App;
