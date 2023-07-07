import {useState,useEffect} from 'react'
import { MENU_URL } from './constants'

const useRestrauntMenu=(resId)=>{

    const [menu,setMenu]=useState(null)

    const [infoCard,setInfoCard]=useState([])
    const [offerCard,setOfferCard]=useState([])
    const [itemCard,setItemCard]=useState([])

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu=async ()=>{
        let data=await fetch(MENU_URL+resId)

        data=await data.json()

        await setMenu(data?.data?.cards)
        await setInfoCard(data?.data?.cards[0])
        await setOfferCard(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers)
        await setItemCard(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        // console.log("This is url>>>",MENU_URL+resId)

        // console.log("This is menu>>",menu)
    }

    return {menu,infoCard,offerCard,itemCard};
}

export default useRestrauntMenu;