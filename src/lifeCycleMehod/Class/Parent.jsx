import CompoWillUnmount from './unmount/CompoWillUnmount'
import React from "react";


export default class Parent extends React.Component{

    constructor(){
        super()
        this.state = {
            show : true
        }
    }

    render(){
        return(
            <>
            { this.state.show ? <CompoWillUnmount/> :<h1>Child component is removed</h1> }
             {/* <CompoWillUnmount></CompoWillUnmount> */}
            <button onClick={()=>this.setState({show : !(this.state.show)})}>Todggle to Hide and Show</button>
            </>
        )
    }
}