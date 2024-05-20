import React,{Component} from "react";

class StateClass extends Component{

    constructor(){
        // to call parent constructor  super() is called so we an use this
        super()

        // state => a data container to store  ..

        this.state ={
            data : "Sam Willson",
            num  : 0
        }
    }
    
    update(){
        this.setState({data : 'Katherine'} )
    }

    numUpdate(){
        this.setState({num: this.state.num+1})
    }

    render(){
        return(
            <>
            <div className="">
                <h1>Hello Classes</h1>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.update()}>Click Me to update</button>
                <br />
                <br />
                <h1>{this.state.num}</h1>
                <button onClick={()=>this.numUpdate()}>Update Num</button>
            </div>
            
            </>
        )
    }
}

export default StateClass
