import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import ShimmerMenu from "./ShimmerMenu";
import {AiFillStar} from "react-icons/ai";
import {BiSolidPieChartAlt} from "react-icons/bi" 
import {HiOutlineCurrencyRupee} from 'react-icons/hi'
import { CLOUDINARY_URL } from "../utils/constants";
import Accordion from "./Accordion";
// import useMenuGenerator from "../utils/useMenuGenerator";

const MenuComponent=()=>{

    let [result,setResult]=useState([])
    // let [title,setTitle]=useState("")
    let title;

    function setTitle(){
        title=menu?.itemCard[1]?.card?.card?.title
    }


    const {resId}=useParams();

    let menu=useRestrauntMenu(resId)
    // console.log('This is menu>>>>',menu)

    // const itemLayoutGenerator=(mainHeader,accordionHeader,accordionContent)=>{

        
    // }
    
    const itemGenerator=(items)=>{

        let itemContent,aTitle,body,mainHeader,result=[];
        for(let i=0;i<items.length;i++){

            if(i==0)continue;
            let {categories,itemCards,title}=items[i]?.card?.card

            if(categories){
                for(let j=0;j,categories.length;j++){
                    mainHeader=<h1>{title}</h1>,
                    aTitle=<h3>{categories[j]?.title}</h3>
                    body=categories[j]?.itemCards
                    setResult([...result,{mainHeader:mainHeader,title:aTitle,body:body}])   
                    
                }
            }else{       

                mainHeader=undefined
                aTitle=<h1>{title}</h1>
                body=itemCards
                setResult([...result,{mainHeader:mainHeader,title:aTitle,body:body}])
            }

            return result;
            

        }
    }


    //we cannot write async in useeffect because useeffect returns some cleanup function if we use asyn this function may never be get called  Reasons : async functions implicitly return a promise, and;
    // useEffect expects its callback to either return nothing or a clean-up function.
    
    
    
    if(menu.menu===null) return (<ShimmerMenu/>)
    
    //New code starts here
    
    let {name,areaName,cuisines,avgRatingString,totalRatingsString,sla,costForTwoMessage}=menu?.infoCard?.card?.card?.info;
    
    return (

    <div className="flex justify-center">
        <div className="w-[900px] p-4 mt-11">
            <div className="infoHeader">
                <div className="info flex justify-between">
                    <div className="text-info">
                        <h1 className="font-bold text-2xl">{name}</h1>
                        <p className="text-sm text-gray-500">{cuisines.join(", ")}</p>
                        <p className="text-sm text-gray-500">{`${areaName}, ${sla?.lastMileTravelString}`}</p>
                    </div>
                    <div className="ratings-info">
                        <div className="border border-solid border-gray-400 rounded p-1 w-16 flex flex-col justify-center">
                            <div className="flex flex-row items-center"><AiFillStar className="text-green-700"/> <span className="text-green-700 ml-1 font-bold">{avgRatingString}</span></div>
                            <hr className="border-1 border-solid border-gray-300"/>
                            <p className="font-bold text-[9px] text-gray-500">{totalRatingsString}</p>
                        </div>
                    </div>
                </div>
                <hr className="mt-10 border-1 border-dashed border-gray-400"/>
                <div className="time-money flex mt-4">
                    <div className="flex items-center"><BiSolidPieChartAlt className="font-bold text-xl text-gray-700"/> <span className="font-bold ml-1 text-gray-700">{sla.slaString}</span></div>

                    <div className="flex items-center ml-10"><HiOutlineCurrencyRupee className="font-bold text-xl text-gray-700"/> <span className="font-bold ml-1 text-gray-700">{costForTwoMessage}</span></div>
                </div>

                <div className="offers flex overflow-x-scroll snap-mandatory snap-x no-scrollbar mt-4 ">
                    {
                        menu?.offerCard.map((offer)=>{
                            let {header,couponCode,description,offerLogo}=offer?.info
                            // console.log('This is offerLogo>>',CLOUDINARY_URL+offerLogo)
                            return (
                                <div className="snap-start border border-solid border-gray-300 w-40 h-auto p-2 rounded-lg ml-4 cursor-pointer" key={offer?.info?.offerIds[0]}>
                                    <div className="offer-details flex items-center">
                                    <img className="w-5 h-4" src={CLOUDINARY_URL+offerLogo} alt="" />
                                    <h1 className="ml-3 text-sm font-bold text-gray-500">{header}</h1>
                                    </div>
                                    <p className="text-[10px] text-center text-gray-500 font-bold">{(couponCode || description)?couponCode + " | " + description:""}</p>


                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <hr className="mt-16 shadow-2xl"/>

            <div className="items mt-8">
 
                {
                    setTitle()
    
                }

                <Accordion title={title} data={menu?.itemCard[1]?.card?.card?.itemCards} />
            </div>
        </div>
    </div>
    )


    // New code ends here 
    
    



    //old Code Starts here
    // const {name,cuisines}=menu[0]?.card?.card?.info;

    // const {itemCards} = menu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    // return (
    //     <div className="menu">
    //         <h1>{name}</h1>
    //         <p>{cuisines.join(", ")}</p>
    //         <ul>
    //             {
    //             itemCards?itemCards.map((item)=>{
    //                 const {name,price,defaultPrice,id}=item?.card?.info;
    //                 return(<li key={id}>{name + " - Rs. "+(price/100 || defaultPrice/100)}</li>)
    //                 }
    //                 ):""
    //                 }
    //         </ul>
    //     </div>
    // )

    //old code ends here
}

export default MenuComponent;