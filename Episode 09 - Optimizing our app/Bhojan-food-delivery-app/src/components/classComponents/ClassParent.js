import React from "react";
import ClassChild from "./ClassChild";

class ClassParent extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  componentDidUpdate() {
    console.log("Parent componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Parent componentWillUnmount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div className="parent-container">
        <h1>Parent Component</h1>
        <ClassChild />
        <ClassChild />
      </div>
    );
  }
}
export default ClassParent;
