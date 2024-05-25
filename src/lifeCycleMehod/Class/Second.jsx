import React from "react";

export class Second extends React.Component {
  // first life cycle method constructor()

  constructor() {
    super();

    this.state = {
      status: "active",
    };

    // imp question - can we use props in constructor ?  -> yes we can 

    // console.warn(this.props)
  }

  // second life cycle method render()

  render() {
    console.warn("Render Method", this.props);
    return (
      <>
        <div className="render">
          <h1>
            Render Life Cycle Method - HTML code written here any chnages in
            HTML render will rerender itself{" "}
          </h1>
          <h3>Render method will call when there is :  </h3>
          <li>When Make Component or Component is ready</li>
          <li>When State and props update </li>
          <h1>Lets check recived props {this.props.name}</h1>
          <h2>

            Lets check with state change(Initial state) = {this.state.status}
          </h2>
          <button onClick={() => this.setState({ status: "Inactive" })}>
            {" "}
            Click to update status
          </button>
        </div>
      </>
    );
  }
}
