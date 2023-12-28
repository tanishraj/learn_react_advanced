import React from "react";

class ClassChild extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Child componentDidMount");
  }

  componentDidUpdate() {
    console.log("Child componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Child componentWillUnmount");
  }

  render() {
    console.log("Child Render");

    return (
      <div className="child-container">
        <h1>Child Component</h1>
      </div>
    );
  }
}

export default ClassChild;
