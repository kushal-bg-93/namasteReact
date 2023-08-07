import { useState,useEffect } from "react";

import useInfiniteScroll from "../utils/useInfiniteScroll";
import Shimmer from "./Shimmer";

const InScroll=()=>{
  const [resList, setResList] = useState([]);
  const [page, setPage] = useState(0);
  const [isFetching, setIsFetching] = useInfiniteScroll(moreData);
  const [loadStatus,setLoadStatus]=useState(false)
  let newLength=0;
//   const [length,setLength]=

  const loadData=async ()=>{
      newLength=resList.length+16;
      console.log('inside loadData')
      let data=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9599618&lng=77.6131577&offset=${page}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`)

      data=await data.json()

      setResList(data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setPage(page+16)
  }

  async function moreData(){
      newLength=resList.length+16
      setLoadStatus(true)

      console.log('inside moreData>>')
      let data=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9599618&lng=77.6131577&offset=${page}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`)
      data=await data.json();

      setPage(page+16)
      setResList([...resList,...data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants]);
      setIsFetching(false)
      setLoadStatus(false)
  }

  useEffect(()=>{
      console.log('inside useeffect')
    loadData()
  },[])

  if (resList.length==0) {
    return <Shimmer/>;
  }

  return (
      <>
      {console.log('inside return')}
      {console.log("This is resList>>>",resList)}
            {
                resList.map((data)=>{
                    return <div className="h-52"><h1>{data.data.data.name}</h1></div>
                })
            }
            {loadStatus ? <Shimmer/>:""}
      </>
  )
}

export default InScroll;