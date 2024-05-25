<!-- life cyclemethod 3 phase in react  -->

<!-- 1.Mounting -> Mounting means putting elements into the DOM. -->

React has four built-in methods that gets called, in this order, when mounting a component:

constructor()
getDerivedStateFromProps()
render()
componentDidMount()


<!-- Note : The render() method is required and will always be called, the others are optional and will be called if you define them. -->

The componentDidMount() method is called after the component is rendered.

This is where you run statements that requires that the component is already placed in the DOM.


<!-- 2.Updateing -->

3.Unmounting


<!-- Lifecycle of Components -->

Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

The three phases are: Mounting, Updating, and Unmounting.