import {useState,useEffect} from 'react'
import { MENU_URL } from './constants'

const useRestrauntMenu=(resId)=>{

    const [menu,setMenu]=useState(null)
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

    return menu;
}

export default useRestrauntMenu;