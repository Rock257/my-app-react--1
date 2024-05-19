// why state variable used instead of normal variable a in react look out the example 


function Whystate(){
    let name   = 'Henry'

    function updateFun(){
        name = "Maaya"
        alert(name);
        console.log(name)
    }

    return(
        <>
        <h1>Lets learn about the states in React</h1>
        <h1>{name}</h1>
        {console.log(name)}
        <button onClick={updateFun}>Click</button>
     
        </>
    )
}


export default Whystate; 

// react will  update the data when its state or props change  then it rerendered the component  
// as we can see in above ex name varible change in JS not in react and DOM