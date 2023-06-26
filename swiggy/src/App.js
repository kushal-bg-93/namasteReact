import React from "react";
import ReactDom from "react-dom/client"
import Header from "./components/Header";
import BodyComponent from "./components/BodyComponent";

// const heading=<h1>This is heading from swiggy</h1>





const AppLayout=()=>(
    <>
    <Header/>
    <BodyComponent/>
    </>
)

const root=ReactDom.createRoot(document.getElementById('root'))

root.render(<AppLayout/>)