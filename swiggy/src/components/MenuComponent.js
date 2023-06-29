import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const MenuComponent=()=>{

    const {resId}=useParams();
    const [menu,setMenu]=useState(null)

    //we cannot write async in useeffect because useeffect returns some cleanup function if we use asyn this function may never be get called  Reasons : async functions implicitly return a promise, and;
    // useEffect expects its callback to either return nothing or a clean-up function.

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu=async ()=>{
        let data=await fetch(MENU_URL+resId)

        data=await data.json()

        await setMenu(data?.data?.cards)
        // console.log("This is url>>>",MENU_URL+resId)

        // console.log("This is menu>>",menu)
    }

    if(menu===null) return (<Shimmer/>)

    const {name,cuisines}=menu[0]?.card?.card?.info;

    const {itemCards} = menu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <ul>
                {
                itemCards?itemCards.map((item)=>{
                    const {name,price,defaultPrice,id}=item?.card?.info;
                    return(<li key={id}>{name + " - Rs. "+(price/100 || defaultPrice/100)}</li>)
                    }
                    ):""
                    }
            </ul>
        </div>
    )
}

export default MenuComponent;