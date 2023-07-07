import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { CLOUDINARY_URL } from "../utils/constants";

const Accordion=({title,data})=>{
    const [show, setShow] = useState(false);

    // console.log('This is mainHeader>>',mainHeader)
    // console.log('This is title',title,'This is content>>',data)


  
    return(
        <div className="w-full mt-5 rounded-md">
        {/* <ShimmerPostItem
          card
          title
          cta
          imageType="thumbnail"
          imageWidth={1000}
          imageHeight={500}
          contentCenter
        /> */}

        {/* question section */}

      <div
        onClick={() => setShow(!show)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h1 className="text-xl text-gray-800 font-semibold text-green">{title}</h1>
        <BiChevronDown
          className={`text-3xl transition-all duration-500 ${
            show ? "rotate-180" : ""
          }`}
        ></BiChevronDown>
      </div>

      {/* answer section */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-clip"
          >
            {/* <p className="pt-3 text-sm md:text-base">{data[0]?.card?.info?.description}</p> */}
            {data?data.map(item=>{
                let {name,price,description,imageId,id}=item?.card?.info
            return(
                <div className="h-56 mt-3 w-[100%]" key={id}>
                <div className="flex justify-between">
            <div className="menu-info">
                <h1 className="font-medium text-gray-800 text-lg">{name}</h1>
                <h3 className="text-sm text-gray-800 mt-1">₹ {parseInt(price)/100}</h3>
                <p className="description text-sm text-gray-500 mt-3">{description}</p>
            </div>
            <div className="menu-img ml-3">
                <img src={CLOUDINARY_URL+imageId} className="-z-10 relative mt-3 rounded-xl h-[125] w-[90%] " alt="" />
                {/* <button className="z-10 rounded-lg bg-white text-green-700">ADD</button> */}
            </div>
            </div>
            <hr className="mt-7"/>
            </div>
            )
            
        }):""}
          </motion.div>
        )}
      </AnimatePresence>

        

        </div>
    )
}

export default Accordion;