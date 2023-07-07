import React, { useState } from "react";

/* import react-icons */
import { BiChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";


const ShimmerTest=()=>{
  const [show, setShow] = useState(false);


  
    return(
        <div className="border-2 border-solid border-gray-300 w-40 mt-5 p-5 rounded-md">
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
        <h1 className="text-xl font-semibold text-green">This is question</h1>
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
            <p className="pt-3 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione dolore qui repudiandae odit nostrum corporis optio laudantium a, dolorem illo aliquam nemo ad, quae, maxime perspiciatis natus harum? Excepturi!</p>
          </motion.div>
        )}
      </AnimatePresence>

        

        </div>
    )
}

export default ShimmerTest;