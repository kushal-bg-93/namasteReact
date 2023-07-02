import React,{lazy,Suspense} from "react";
import ReactDom from "react-dom/client"
import Header from "./components/Header";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import MenuComponent from "./components/MenuComponent";
import Shimmer from "./components/Shimmer";

// const heading=<h1>This is heading from swiggy</h1>



let Grocery=lazy(()=>import('./components/Grocery'))

const AppLayout=()=>(
    <>
    <Header/>
    <Outlet/>
    </>
)


const router=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement: <Error/>,
        children:[
            {
                path:"/",
                element:<BodyComponent/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/menu/:resId",
                element:<MenuComponent/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            },
        ]
    }
])


const root=ReactDom.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={router}/>)