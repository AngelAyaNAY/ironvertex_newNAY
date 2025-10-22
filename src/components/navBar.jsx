import { Link, useLocation } from "react-router-dom";
import "../styles/navBarStyles.css"
import LogoLeft from "./../../public/logos/LOGO_Line.webp";

const NavBar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className="mainNavbar">
            <div className="imgLogoContent">
                <img src={LogoLeft} alt="LogoLeft.webp" />
            </div>
            <div className="menuItemsContent">
                <ul className="menuContent">
                    <Link to="/" className={`menuItem ${currentPath === "/" ? "activeItem" : ""}`} >
                        Home
                    </Link>
                    <Link to="/members" className={`menuItem ${currentPath === "/members" ? "activeItem" : ""}`} >
                        Members
                    </Link>
                    <Link to="/contact" className={`menuItem ${currentPath === "/contact" ? "activeItem" : ""}`} >
                        Contact Us
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
