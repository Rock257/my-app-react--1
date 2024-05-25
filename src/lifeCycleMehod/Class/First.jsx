import React from "react";

// Constructor - First Life Cycle Method  
// imp - Constructor called first then render as e know that constructor will automatically called when the class is created 

class First extends React.Component{

    constructor(){

        super();
        // super is called to call the parent construcctor class  component 
        console.warn("Constructor")

        // we define state here before the HTML Ready

        this.state ={
            data : 'Tony Stark',
        }

    } 
    
    render(){
        console.warn("Render")
        return(
            <>
               <h1>Hello Welcome in Class Component</h1>

            {/* lets print the state */}
            <h1>Initial state  = {this.state.data}</h1>

            </>
         
            
        )
    }
}

export default First