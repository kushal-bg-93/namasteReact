import { ShimmerSocialPost } from "react-shimmer-effects-18";
const ShimmerMenu=()=>{
    return(

        <div className="flex justify-center mt-20">
        <div className="justify-center w-[900]">
        <ShimmerSocialPost type="both"/>
        {/* <ShimmerPostItem
          card
          title
          cta
          imageType="thumbnail"
          imageWidth={1000}
          imageHeight={500}
          contentCenter
        /> */}
        </div>
        </div>
    )
}

export default ShimmerMenu;