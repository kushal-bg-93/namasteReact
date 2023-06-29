import { LOGO_IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header=()=>(
    <div className="headerContainer">
    <div className="logoContainer">
        <img src={LOGO_IMG_URL} alt="app logo" className="logo" />
    </div>
    <div className="navItem">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li>Cart</li>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
    </div>
    </div>
)

export default Header;