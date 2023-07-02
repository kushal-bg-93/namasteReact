import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const MenuComponent=()=>{

    const {resId}=useParams();
    const menu=useRestrauntMenu(resId)

    //we cannot write async in useeffect because useeffect returns some cleanup function if we use asyn this function may never be get called  Reasons : async functions implicitly return a promise, and;
    // useEffect expects its callback to either return nothing or a clean-up function.

    

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