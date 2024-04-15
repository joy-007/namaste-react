import React from "react";
import ReactDOM  from "react-dom";

/*const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[ React.createElement("h1",{},"I am H1 tag"),
    React.createElement("h2",{},"I am H2 tag")]),

    React.createElement("div",{id:"child1"},[ React.createElement("h1",{},"I am H1 tag inside Child1"),
    React.createElement("h2",{},"I am H2 tag inside Child1")])
]
    
)*/

//const heading = React.createElement("h1",{},"Hello World from React");
//JSX (transpiled before it reached to JS) - Parcel will do these via Babel 
const jsxHeading = <h1>Hello React from JSX </h1>

const Title = ()=>(
   <h1> Welcome to React Tutorial</h1>
);
//React Funcitonal component
const Headingcomponent = () =>(
    <div id="container">
      <Title/>
      <h2>Namate react from Funcitonal component</h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headingcomponent/>);