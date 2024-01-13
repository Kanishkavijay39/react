 const heading = React.createElement("h1",{id :"heading",xyz:"abc"},"Hello world using react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
const parent = React.createElement("div", {id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I am inside nested div"),
        React.createElement("h2",{},"I am inside nested div")],
     React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"I am inside nested div"),
        React.createElement("h2",{},"I am inside nested div")]
)));

root.render(parent);
console.log(parent);


//jsx