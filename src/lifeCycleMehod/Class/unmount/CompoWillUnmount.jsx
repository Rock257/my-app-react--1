import React from "react";

export default class CompoWillUpdate extends React.Component{
    constructor(){
        super();
    }

    componentWillUnmount(){
        alert('Component Removed')
        console.warn('ComponentWillUnmount called ')
    }
// will calls automatically when component will  removed via toggle

    render(){
        return(
            <>
            <div className="umount">
                {/* <h1>CompomnentWillUnmount</h1> */}
                <h1>Child Component</h1>
            </div>
            </>
        )
    }
}