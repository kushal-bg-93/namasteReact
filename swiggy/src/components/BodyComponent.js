import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const BodyComponent=()=>{

    let [restrauntList,setRestrauntList]=useState([])
    let [searchRestaurantList,setSearchRestaurantList]=useState([])
    let [searchText,setSearchText]=useState("")

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9599618&lng=77.6131577&page_type=DESKTOP_WEB_LISTING")
        // console.log(await data.json())
        const restListFromSwiggy=await data.json()
        setRestrauntList(restListFromSwiggy?.data?.cards[2]?.data?.data?.cards)
        setSearchRestaurantList(restListFromSwiggy?.data?.cards[2]?.data?.data?.cards)
    }

    const searchRestaurant=()=>{
        setRestrauntList(searchRestaurantList.filter((restaurant)=>restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())))
    }

    const filterRestraunt=()=>{
        restrauntList=setRestrauntList(searchRestaurantList.filter((restraunt)=>restraunt.data.avgRating>=4))
    }
    
    return (!restrauntList.length)?(<Shimmer/>):(
    <>
    <div className="filter"> <button className="filter-btn" onClick={filterRestraunt}>Filter</button> <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/><button onClick={searchRestaurant}>Search</button></div>
    <div className="restroContainer">
        {restrauntList.map((restraunt)=><RestroCard key={restraunt.data.id} resData={restraunt}/>)}
    </div>
    </>
)}

export default BodyComponent;