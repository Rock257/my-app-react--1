import React,{Component} from "react";

class LearnProps extends Component{
    render(){
        console.warn(this.props)
        return(
            <>
            <div className="main"> 
             <div className="propsClass" style={{display :"flex", gap :'2rem', backgroundColor :'lightpink', alignItems: "center", justifyContent: "center"}}> 
             <h2>Employee Name {this.props.name}</h2>
             <h2>Employee Email {this.props.email}</h2>
            <h2>Name of Company {this.props.empName}</h2>
            </div>

            </div>
           
           
            </>
           
        )
    }
}

export default LearnProps