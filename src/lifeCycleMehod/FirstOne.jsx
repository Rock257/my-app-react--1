import React from 'react'
import LCM from '../img/LCM.png'

export default function FirstOne() {
  return (
    <div className='main'>
        <img src={LCM}alt="" />

        <h1>COmponent Life Cycle method 3 phase Basic Theory </h1>
        <ol style={{listStyle:'none'}}>
            <li><button>Load Product(Mounting) = ComponentDidMount </button></li> 
            <br />
            <li><button> Update Product(Updating) = ComponentDidUpdate </button></li>
            <br />
            <li><button> Remove Product(Demounting) = ComponentWillUnmount </button></li>
        </ol>
        {/* Int que - when we remove product and again load product ,will initiate the life cycle and run previous one    */}
        <h1>Life Cycle Method Runs When </h1>
        <ol>
            <li>When Component is Loaded</li>
            <li>When Component is Updated with state and props</li>
            <li>When Component is removed</li>
        </ol>
        
    </div>
  )
}
