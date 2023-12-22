import React from "react";
import ReactDOM from "react-dom/client";

// React component using normal function
function TitleComponent() {
  return (
    <h1 id="heading" className="title">
      Namaste React using JSX!
    </h1>
  );
}

// javascript variable 
const value = 1000

// Component Composition - Calling one componen within the other
const HeadingComponent = () => {
  return (
    <div id="container">
      {/* {} helps write js inside JSX */}
      <h1>{value}</h1>
      <h1>{value + value}</h1>
      {console.log("Any Javascript code will work within JSX")}
      {TitleComponent()}
      <TitleComponent></TitleComponent>
      <TitleComponent />
      <h1>I am a heading component.</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// React way to Render the component
root.render(<HeadingComponent />);
