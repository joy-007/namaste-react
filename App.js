



const parent = React.createElement("div",{id:"parent"},[

    React.createElement("div",{id:"child"},[ React.createElement("h1",{},"I am H1 tag"),
    React.createElement("h2",{},"I am H2 tag")]),

    React.createElement("div",{id:"child1"},[ React.createElement("h1",{},"I am H1 tag inside Child1"),
    React.createElement("h2",{},"I am H2 tag inside Child1")])

]
    
)
const heading = React.createElement("h1",{},"Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);