import React from "react";

class Number extends React.Component {
  state = {
    count: 0
  };
  //javascript code
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  //End of javascript code
  componentDidMount() {
    console.log("Component Rendered");
  }
  componentDidUpdate() {
    console.log("I just updated");
  }
  componentWillUnmount() {
    console.log("Goodbye, cruel world");
  }
  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>
          The number is {this.state.count}
        </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default Number;
