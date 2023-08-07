import {useState} from "react"
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import ReactPlayer from 'react-player'

function Section({title,body}){

    const [dispStatus,setDispStatus]=useState(false)
    return(
        <div className="mt-3 p-3">
            <div className="flex justify-between w-40 cursor-pointer" onClick={()=>{dispStatus?setDispStatus(false):setDispStatus(true)}}>
                <h1>{title}</h1>

                <div className="">
                    {<MdOutlineKeyboardArrowDown className={dispStatus?"rotate-180 text-2xl font-bold duration-150":"text-2xl font-bold rotate-0 duration-150"}/>}
                </div>

            </div>
            
            <p id="ac-body" className={dispStatus?"mt-3 visible duration-300 ease-in-out":"mt-3 hidden duration-300 ease-in-out"}>
                {body}
            </p>



        </div>
    )
}
const AccordionTest=()=>{

    return(
        <div className="ac-component">
            <Section title={"Sample title"} body={"Sample Body"}/>
            <ReactPlayer className="ml-7" controls="true" url='https://www.youtube.com/watch?v=_shA5Xwe8_4' />

        </div>
    )
}

export default AccordionTest;