import { CLOUDINARY_URL } from "../utils/constants";
const RestroCard=({resData})=>{
    const{name,costForTwo,cuisines,cloudinaryImageId,avgRating}=resData?.data;
    return (
      <div className="restroCard">
          <img src={CLOUDINARY_URL+cloudinaryImageId} alt="" className="restroImage" />
          <h1>{name}</h1>
          <p>{cuisines?cuisines.join(', '):""}</p>
          <h2>{costForTwo/100} For Two</h2>
          <h3>{avgRating}</h3>
      </div>
  )}

  export default RestroCard;