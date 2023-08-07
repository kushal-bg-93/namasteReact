import { CLOUDINARY_URL } from "../utils/constants";
import { MdOutlineLocationOn } from "react-icons/md"
import { LiaRupeeSignSolid } from "react-icons/lia"
import { BsCircleFill } from "react-icons/bs"
import { TbTruckDelivery } from "react-icons/tb"
const RestroCard = ({ resData }) => {
    console.log('This is resData >>>>restrocard>>>',resData)

    // console.log('This is resdata>>>>', resData)
    const { name, costForTwo, cuisines, cloudinaryImageId, avgRating, area, slaString, aggregatedDiscountInfoV3, veg, feeDetails, promoted } = resData?.info;
    return (
        <div className="w-96 m-5 h-[460] border p-6 hover:border shadow-md hover:shadow-lg rounded-lg hover:scale-110 duration-150">
            {aggregatedDiscountInfoV3 !== undefined || promoted ? <h1 className={promoted ? "px-6 bg-yellow-600 z-10 opacity-80 text-white absolute" : "px-6 bg-red-600 opacity-80 z-10 text-white absolute"}>{promoted ? "PROMOTED" : aggregatedDiscountInfoV3 ? aggregatedDiscountInfoV3.header : avgRating * 10 + "% OFF"}</h1> : ""}
            {/* {
              promoted?<h1 className="px-6 bg-yellow-500 z-11 text-white absolute">PROMOTED</h1>:<h1 className="z-0">""</h1>
          } */}
            <img className="rounded-lg shadow-lg opacity-90 hover:opacity-100 hover:shadow-xl hover:scale-105 duration-200" src={CLOUDINARY_URL + cloudinaryImageId} alt="" />
            <div className="flex justify-between items-center mt-2"><h1 className="font-extrabold text-2xl">{name}</h1><BsCircleFill className={veg ? 'text-green-800 shadow-xl' : 'text-orange-600 text-opacity-80 shadow-xl'} /></div>
            <p className="text-gray-500">{cuisines ? cuisines.slice(0, 7).join(', ') : ""}</p>
            <hr className="mt-4" />


            <div className="flex mt-4 justify-between items-end">
                <div className="flex items-center"><LiaRupeeSignSolid className="text-gray-700" /><h2 className="font-bold ml-1 text-gray-800">{costForTwo / 100} For Two </h2> <TbTruckDelivery className="ml-3 mx-1 text-xl text-gray-500" /><span className="text-sm text-gray-500 font-medium">+ {parseInt(feeDetails?.amount) / 100}</span></div>
                <div><h3 className={avgRating > 3.5 ? 'bg-green-600 rounded-sm shadow-2xl text-white px-4' : 'bg-orange-600 rounded-sm shadow-xl text-white px-4'}>{avgRating}</h3></div>
            </div>

            <div className="flex items-center mt-2 justify-between">
                <div className="flex items-center">

                    <MdOutlineLocationOn className="text-gray-500" /> <h1 className="ml-1 text-gray-500">{area}</h1>
                </div>
                <h1 className="font-semibold">{slaString}</h1>
            </div>
        </div>
    )
}

export default RestroCard;