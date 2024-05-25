import React from "react";

export default class ShouldComponentUp extends React.Component{

    constructor(){
        super()
        this.state ={
            counter : 0 ,

        }
    }

    componentDidMount(){
    }

    componentDidUpdate(prevState , prevProps , snapshot){
    }


    //by default feature of this(retrun false) stop the rendering  
    // use for conditional rendering  ,increases the speed of application

    shouldComponentUpdate(){
        console.warn( " shouldComponentUpdate" ,this.state.counter)
        
        if(this.state.counter>4 && this.state.counter<10){
            return true
        }
    }

    // shouldComponentUpdate  -> it automatically block the  rendering  ,did return true it will start updating

    render(){ 
        console.warn('Render Runs')
    
        return(
            <>
            <div className="update">
                <h1>{this.state.counter}</h1>
                <button onClick={()=>this.setState({counter : this.state.counter+1})}>Update Counter</button>
            </div>
            </>
        )
    }
}