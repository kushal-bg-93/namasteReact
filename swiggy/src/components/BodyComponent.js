import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RESTROCARD_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const BodyComponent=()=>{

    let [restrauntList,setRestrauntList]=useState([])
    let [searchRestaurantList,setSearchRestaurantList]=useState([])
    let [searchText,setSearchText]=useState("")

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        const data=await fetch(RESTROCARD_URL)
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
    // console.log('restrauntList>>',restrauntList)
    
    return (!restrauntList.length)?(<Shimmer/>):(
    <div>
    <div className="m-4 flex justify-between"><button className="py-2 px-5 rounded-lg text-gray-400 hover:text-gray-300 duration-150 bg-gray-800 " onClick={filterRestraunt}>Filter</button><div> <input type="text" className="border rounded-lg p-2 ml-4 mr-4 shadow-sm" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/><button className="py-2 px-5 hover:text-gray-300 duration-150 rounded-lg text-gray-400 bg-gray-800 " onClick={searchRestaurant}>Search</button></div></div>
    <div className="flex flex-wrap justify-start ml-20 mx-auto">
        {restrauntList.map((restraunt)=><Link key={restraunt.data.id} to={"/menu/"+restraunt.data.id}><RestroCard resData={restraunt}/></Link>)}
    </div>
    </div>
)}

export default BodyComponent;