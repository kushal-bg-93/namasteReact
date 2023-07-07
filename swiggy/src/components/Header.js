import { LOGO_IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
    let onlineStatus=useOnlineStatus();
    return (
    <div className="flex justify-between items-center bg-gray-800 shadow-2xl">
    <div className="logoContainer flex">
        <img src={LOGO_IMG_URL} className="ml-4 w-28" alt="app logo" />
    </div>
    <div>
        <ul className="flex">
            <li className="p-3 text-gray-300">Online Status : {onlineStatus?<span>&#128994;</span>:<span>&#128308;</span>}</li>
            <li className="p-3 hover:scale-110 text-gray-400 hover:text-gray-300 duration-100"><Link to="/">Home</Link></li>
            <li className="p-3 hover:scale-110 text-gray-400 hover:text-gray-300 duration-100"><Link to="/about">About Me</Link></li>
            {/* <li className="p-3 hover:scale-110 text-gray-400 hover:text-gray-300 duration-100">Cart</li> */}
            <li className="p-3 hover:scale-110 text-gray-400 hover:text-gray-300 duration-100"><Link to="/contact">Contact Us</Link></li>
            {/* <li className="p-3 hover:scale-110 text-gray-400 hover:text-gray-300 duration-100"><Link to="/grocery">Grocery</Link></li> */}
            {/* <li className="p-3 hover:scale-110 text-gray-400 hover:text-gray-300 duration-100"><Link to="/shimmer">Shimmer</Link></li> */}
            {/* <li className="p-3 hover:scale-110 text-gray-400 hover:text-gray-300 duration-100"><Link to="/infinite">Infinite</Link></li> */}
        </ul>
    </div>
    </div>
)}

export default Header;