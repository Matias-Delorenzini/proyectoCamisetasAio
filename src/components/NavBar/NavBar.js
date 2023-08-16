import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import "./Navbar.css"
import { NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="Nav">
            <Link to={'/'} className="LinkTitle">
                <h3 className="h3Title">MATI & AIO CAMISETAS</h3>
            </Link>
            <ul className="Categories">
                <li>
                    <NavLink to="/category/premier" className={"NavlinkA"}>Premier League</NavLink>
                </li>
                <li>
                    <NavLink to="/category/seriea" className={"NavlinkA"}>Serie A</NavLink>
                </li>
                <li>
                    <NavLink to="/category/bundesliga" className={"NavlinkA"}>Bundesliga</NavLink>
                </li>
                <li>
                    <NavLink to="/category/laliga" className={"NavlinkA"}>LaLiga</NavLink>
                </li>
                <li>
                    <NavLink to="/category/others" className={"NavlinkA"}>Otros</NavLink>
                </li>
                <li>
                    <NavLink to="/category/national" className={"NavlinkA"}>Selecciones</NavLink>
                </li>
            </ul>
            <div className="CartWidget">
                <CartWidget />
            </div>
        </nav>
    )
}




