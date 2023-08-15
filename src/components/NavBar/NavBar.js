import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import "./Navbar.css"
import { NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="Nav">
            <Link to={'/'} className="LinkTitle">
                <h3 className="h3Title">CAMISETAS DELORENZINI</h3>
            </Link>
            <ul className="Categories">
                <li>
                    <NavLink to="/category/premier">Premier League</NavLink>
                </li>
                <li>
                    <NavLink to="/category/seriea">Serie A</NavLink>
                </li>
                <li>
                    <NavLink to="/category/bundesliga">Bundesliga</NavLink>
                </li>
                <li>
                    <NavLink to="/category/laliga">LaLiga</NavLink>
                </li>
                <li>
                    <NavLink to="/category/others">Otros</NavLink>
                </li>
                <li>
                    <NavLink to="/category/national">Selecciones</NavLink>
                </li>
            </ul>
            <div className="CartWidget">
                <CartWidget />
            </div>
        </nav>
    )
}




