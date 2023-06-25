import React from "react";
import ReactDOM from "react-dom/client";

const heading=<h1>This is heading from react element</h1>

const Heading=()=>(
        <>
        {heading}
    <h1>This is heading from react component</h1>
        </>

)

const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(<Heading/>)