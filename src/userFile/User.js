
function User(props){
    const clickMe = ()=>{
        console.log("hey Btn clicked ")
    }
    return(
        <>
        <h2>Hello User File here used for default export </h2>
        <br />
        <h1>Name recived from Props {props.name}</h1>
        
        
        <button id="btn" onClick={clickMe}>Click Me</button>
        </>
          
    )
}

export default User

