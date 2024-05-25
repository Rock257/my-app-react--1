// ComponentUpdate -> on;y when any state or props  update  it will run  
import React from "react"

export default class FirstUpdate extends React.Component{
    constructor(){
        super()
        console.warn("Constuctor Runs")

        this.state ={
            name :"Tara Sharma",
            pitName : "Star",
            email : "dnndn@gmail.com",
            counter : 0 ,

        }
    }

    componentDidMount(){
        console.warn("Component Mount Done")
    }

    componentDidUpdate(prevState , prevProps , snapshot){
        console.warn("ComponentDidUpdate")
       console.warn(this.state.pitName)
       console.warn(prevState , prevProps , snapshot)
    //    this will run when the state update take place

    console.warn(this.props.status)
// it will show the previous state 
    }

    render(){ 
        console.warn('Render Runs')
        return(
            <>
            <div className="update">
                <h1>Hello React</h1> 
                <h1>Is user is still {this.props.status}</h1>

                <button onClick={()=>this.setState({name : "Rahul Soni"})}>Click to update the state</button>
                <br />
                <h1>{this.state.email}</h1>
                <button onClick={()=>this.setState({email :"abc@yahooo.com"})}>Click to update email</button>

                <h1>{this.state.counter}</h1>
                <button onClick={()=>this.setState({counter : this.state.counter+1})}>Update Counter</button>
            </div>
            </>
        )
    }
}

