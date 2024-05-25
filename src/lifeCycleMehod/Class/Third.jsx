import React from "react";

// componentDidUnmount - no impack on this chnage of state or props  
// use - when we have  call the api  
// which one is called first render or componentDidMount ?   ->  constructor() >> render() >>componentDidMount 
//only render method called when the and state update and props recived  
// componentDidMount only update once when the component is mount ,there is no effect of the props and state changed on the componentDidMount

// Ques. - can we update state in render and componentDidMount ?

export default class Third extends React.Component{
    constructor(){
        super();

        console.warn("Constructor called first")
        this.state={
            marwelBestChr :"Tony Stark"
        }
    }
    componentDidMount(){
        console.warn("ComponentDidMount called third")
    }
    // 
    render(){
        console.warn("Render called second")

        // console.log(this.setState({marwelBestChr:"Thor"})) 
        // never update state directly in render it will give n no. render on page  ,we can update state in render btu woth condition otherwise it will goes into infinite loop
        return(
            <>
            
            <div className="componentDidUnmount">
                <h1>
                    {this.state.marwelBestChr}
                </h1>
                <button onClick={()=> this.setState({ marwelBestChr : "Thor"})}>Click To Update Character</button>
            </div>
            </>
        )
    }
}