<!-- most imp file is package.json --> 
containe project details, liberary,commands ,dependencies used

npm install 
<!-- -will add node module version as per package.json  --> -->

can add custom command also by change the script in package.json and 

<!-- install new package -->
npm install or i package name

<!-- ECMA6 -->

<!-- 1. Classes :  -->
A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.

class Car{
    constructor(name,modelYear){
        this.brand = name;
        this.model = modelYear
    }

     present(){
        return  `I have a ${this.model} ${this.name}`
    }
}

const myCar = new Car("Ford Mustang" , 1998)

console.log(myCar)
 


<!-- Arrow Functions -->

const hello = (name)=>{
    return(
        ` Hello Good Morning ${name} `
    )
}

hello('Rahul')

<!-- Component ->peice of code that can be reused --> 
Components are like functions that return HTML elements.

types of component (total - 6 types mostly used are 2 types component )
1. functional comp.
2. class comp. 
3. (HOC) higher order comp
4. pure comp
5. controlled comp
6. uncontrolled comp

<!-- Props -->

Components can be passed as props, which stands for properties.
Props are like function arguments, and you send them into the component as attributes.

Props are arguments passed into React components.
Props are passed to components via HTML attributes.

<!-- imp -->
React Props are like function arguments in JavaScript and attributes in HTML.
To send props into a component, use the same syntax as HTML attributes:


<!-- array destructing  -->

const vehicles = ['Tata' , 'Fortuner' , 'Ashok-Layland' ,'F-1']


<!-- to acces what we need -->
const car = vehicles[0]

const raceCar = vehicles[3]


<!-- with destructing order matters  -->

const [car , raceCar , truck]  = vehicles

<!-- example -->
function cal(a,b){
    const add = a+b ;
    const sub = a-b ;
    const mul = a*b;
    const divi = a/b ;

    return  [add ,sub ,mul , divi]
}


const [add ,sub, mul, divi] = cal(8,5)

<!-- useState -->

useState() accepts an initial value and retrun two value in  

const [value , setValue] = useState(initialvalue )

value => current state 
setValue => a function that updte the state 

we are destructuring the returned values from useState

The first value, color, is our current state.

The second value, setColor, is the function that is used to update our state.