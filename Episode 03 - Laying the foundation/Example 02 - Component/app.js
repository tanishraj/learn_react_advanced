import React from "react";
import ReactDOM from "react-dom/client";

// Below code is similar to React.createElement because babel will transpile it.
const jsxHeading = (
  <h1 id="heading" className="title">
    Namaste React using JSX!
  </h1>
);

/*
React Component
1 - Class based Component
2 - Functional Component
*/

// functional component
const HeadingComponent = () => {
  return <h1>I am a heading component.</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// Javascript way to render the component
root.render(HeadingComponent());

// React way to Render the component
root.render(<HeadingComponent />);
