import React from "react";

function LearnProps(props){
    return(
        <>
        <div className="stuData" style={{backgroundColor:'grey', display:"flex", alignItems: "center", gap:"2rem", justifyContent: "center"

        }}>
        <h1>Student Data </h1>
        <h2>Name : {props.name}</h2>
        <h2>E-Mail : {props.email} </h2>
        <h2>Salary  : {props.salary}</h2>
        </div>
       
        </>
    )
}

export default LearnProps;