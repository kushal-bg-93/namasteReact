import { CLOUDINARY_URL } from "../utils/constants";
const RestroCard=({resData})=>{
    const{name,costForTwo,cuisines,cloudinaryImageId,avgRating}=resData?.data;
    return (
      <div className="w-96 m-5 h-[440] border p-6 hover:border shadow-md hover:shadow-lg rounded-lg hover:scale-110 duration-150">
          <img className="rounded-lg shadow-lg opacity-90 hover:opacity-100 hover:shadow-xl hover:scale-105 duration-200" src={CLOUDINARY_URL+cloudinaryImageId} alt="" />
          <h1 className="font-extrabold text-2xl mt-3">{name}</h1>
          <p className="text-gray-500">{cuisines?cuisines.join(', '):""}</p>
          <div className="flex mt-6 justify-between items-end">
          <h2 className="font-bold text-gray-800">Rs.{costForTwo/100} For Two</h2>
          <div><h3 className={avgRating>3.5?'bg-green-600 rounded-sm shadow-2xl text-white px-4':'bg-orange-600 rounded-sm shadow-xl text-white px-4'}>{avgRating}</h3></div>
          </div>
      </div>
  )}

  export default RestroCard;