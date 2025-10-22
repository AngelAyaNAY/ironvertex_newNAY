import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar"
import "../styles/mainLayoutStyles.css"

const Layout = () => {
    return (
        <div className="mainLayout">
            <div className="menuHeader">
                <NavBar />
            </div>
            <div className="contentPages">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
