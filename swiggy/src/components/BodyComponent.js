import RestroCard from "./RestroCard";
import resList from "../utils/mockData";
import { useState } from "react";

const BodyComponent=()=>{

    [restrauntList,setRestrauntList]=useState(resList)

    const filterRestraunt=()=>{
        restrauntList=setRestrauntList(restrauntList.filter((restraunt)=>restraunt.data.avgRating>=4))
    }
    
    return (
    <>
    <div className="filter"> <button className="filter-btn" onClick={filterRestraunt}>Filter</button></div>
    <div className="restroContainer">
        {restrauntList.map((restraunt)=><RestroCard key={restraunt.data.id} resData={restraunt}/>)}
    </div>
    </>
)}

export default BodyComponent;