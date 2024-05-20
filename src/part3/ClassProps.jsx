import React,{Component} from "react";

class LearnProps extends Component{
    render(){
        console.log(this.props.empName)
        console.warn(this.props.name)
        console.warn(this.props.email)
        return(
            <>
             <h1>Hello Here Props in class Component</h1>
             <h2>Employee Name {this.props.name}</h2>
             <h2>Employee Email {this.props.email}</h2>
            <h2>Name of Company {this.props.empName}</h2>
            </>
           
        )
    }
}

export default LearnProps