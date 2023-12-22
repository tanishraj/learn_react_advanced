import React from 'react'
import ReactDOM from 'react-dom/client'

// Creating React Elements or HTML DOM elements like this can be very hectic and is not developer friendly.
const heading = React.createElement("h1", { id: 'heading' }, "Namaste React!") 
console.log(heading)

// Below syntax looks like writing HTML and is more developer friendly and easy to write.
const jsxHeading = <h1 id="heading">Namaste React using JSX!</h1>
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)