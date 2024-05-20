import { useState } from 'react';
import './App.css';
// import User from './userFile/User';
// import { Test } from './userFile/Test';
// import UserName from './classComp/UserClass';
// import EventLearn from './part3/EventLearn';
// import StatesInReact from './part3/StatesInReact'
// import Whystate from './part3/Whystate';
// import StateClass from './classComp/StateClass';
// import LearnProps from './part3/LearnProps';

import ClassProps from './part3/ClassProps'

function HeyBaby(props){
  return(
    <>
    <h1>
      Baby Name is {props.name}
    </h1>
    <h3>
      no export required same page 
    </h3>
    </>
    
  )
}
function App() {

  // sendin veriable through props 
  const babyName = 'shivika'

  const userDetails = {
    name : 'Shiv' ,
    place : "Kailash Parvat",
    work : 'Meditation'
  }

  const student = {
    name : 'Rahul',
    qualification : "B.Tech",
    isMarried  : false ,
    currentJob : "non IT"
  }

  // for props update  

  const  [name ,setName ] = useState('sanjay');
  const [email ,setEmail]  = useState('rajsharma233@gmail.com');
  const [salary ,setSalary] = useState( '1 Lakh Rs')
  // const [add ,setAdd] = useState('Shastri-Nagar')


function updateAll(){
  setName("Raj")
  setEmail("Rajdejf39@gmail.com")
  setSalary('88k')
  // setAdd("Rajiv Nagar")
}

  return (
    <div className="App">
      <h1>Hello React </h1>
      
      {/* sending object as props  */}
      {/* <User name = "Rahul" userDet = {userDetails}/> */}

      {/* <User/>
      <Test/>
      <HeyBaby name = {babyName}/>
      <UserName/> */}
      {/* <EventLearn/> */}
      {/* <Whystate/> */}
      {/* <StatesInReact/> */}
      {/* <StateClass/> */}


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

      <ClassProps empName = 'TCS' name = 'Dristi Sharma' email ='sharmaDristi@gmail.com'/>
      
      
      

    </div>
  );
}



export default App;
