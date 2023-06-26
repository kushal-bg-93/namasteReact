import { LOGO_IMG_URL } from "../utils/constants";
const Header=()=>(
    <div className="headerContainer">
    <div className="logoContainer">
        <img src={LOGO_IMG_URL} alt="app logo" className="logo" />
    </div>
    <div className="navItem">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Cart</li>
            <li>Contact Us</li>
        </ul>
    </div>
    </div>
)

export default Header;