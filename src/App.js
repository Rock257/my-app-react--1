import './App.css';
// import User from './userFile/User';
// import { Test } from './userFile/Test';
// import UserName from './classComp/UserClass';
// import EventLearn from './part3/EventLearn';
import StatesInReact from './part3/StatesInReact'
import Whystate from './part3/Whystate';

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
      <Whystate/>
      <StatesInReact/>

    </div>
  );
}



export default App;
