import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RESTROCARD_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useInfiniteScroll from "../utils/useInfiniteScroll";

const BodyComponent=()=>{

    let [restrauntList,setRestrauntList]=useState([])
    let [searchRestaurantList,setSearchRestaurantList]=useState([])
    let [searchText,setSearchText]=useState("")
    const [page, setPage] = useState(0);
    const [isFetching, setIsFetching] = useInfiniteScroll(moreData);
    const [loadStatus,setLoadStatus]=useState(false)

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        const data=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9599618&lng=77.6131577&offset=${page}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`)
        // console.log(await data.json())
        const restListFromSwiggy=await data.json()
        setRestrauntList(restListFromSwiggy?.data?.cards)
        setSearchRestaurantList(restListFromSwiggy?.data?.cards)
        setPage(page+16)
    }

    async function moreData(){
        setLoadStatus(true)
  
        console.log('inside moreData>>')
        let data=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9599618&lng=77.6131577&offset=${page}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`)
        data=await data.json();
  
        setPage(page+16)
        setRestrauntList([...restrauntList,...data.data.cards]);
        setIsFetching(false)
        setLoadStatus(false)
    }

    const searchRestaurant=()=>{
        setRestrauntList(searchRestaurantList.filter((restaurant)=>restaurant.data.data.name.toLowerCase().includes(searchText.toLowerCase())))
    }

    const filterRestraunt=()=>{
        restrauntList=setRestrauntList(searchRestaurantList.filter((restraunt)=>restraunt.data.data.avgRating>=4))
    }
    // console.log('restrauntList>>',restrauntList)
    
    return (!restrauntList.length)?(<Shimmer/>):(
    <div>
    <div className="m-4 flex justify-between"><button className="py-2 px-5 rounded-lg text-gray-400 hover:text-gray-300 duration-150 bg-gray-800 " onClick={filterRestraunt}>Filter</button><div> <input type="text" className=" border border-gray-400 rounded-lg p-2 ml-4 mr-4 shadow-sm" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/><button className="py-2 px-5 hover:text-gray-300 duration-150 rounded-lg text-gray-400 bg-gray-800 " onClick={searchRestaurant}>Search</button></div></div>
    <div className="flex flex-wrap justify-start ml-20 mx-auto">
        {restrauntList.map((restraunt)=><Link key={restraunt.data.data.id} to={"/menu/"+restraunt.data.data.id}><RestroCard resData={restraunt}/></Link>)}
    </div>
    {loadStatus ? <Shimmer/>:""}
    </div>
)}

export default BodyComponent;