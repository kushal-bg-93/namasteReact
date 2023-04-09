{/* <div id="parent">
    <div id="child1">
        <h1>This is heading from child1</h1>
        <h2>This is second heading from child 1</h2>
    </div>
    <div id="child2">
        <h1>This is heading from child 2</h1>
        <h2>This is second heading from child 2</h2>
    </div>
</div> */}



// const heading=React.createElement('h1',{id:"heading"},"This is heading from react");

const parent=React.createElement('div',{id:"parent"},[React.createElement('div',{id:"child1"},[React.createElement('h1',{},"This is heading from child1"),React.createElement("h2",{},"This is second heading from child 1")]),React.createElement("div",{id:"child2"},[React.createElement('h1',{},"This is heading from child 2"),React.createElement('h2',{},"This is second heading from child 2")])])

    const root=ReactDOM.createRoot(document.getElementById("root"))

    root.render(parent);