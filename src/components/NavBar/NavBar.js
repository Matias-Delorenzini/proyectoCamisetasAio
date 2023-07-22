import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"
import "./Navbar.css"

const NavBar = () => {
    return (
        <nav>
            <Link to={'/'}>
                <h3>Pivot Camisetas</h3>
            </Link>
            <div className="Categories">
                <NavLink to={"/category/premier"} className={({ isActive}) => isActive? "ActiveOption" : "Option"}>Premier League</NavLink>
                <NavLink to={"/category/seriea"} className={({ isActive}) => isActive? "ActiveOption" : "Option"}>Serie A</NavLink>
                <NavLink to={"/category/bundesliga"} className={({ isActive}) => isActive? "ActiveOption" : "Option"}>Bundesliga</NavLink>
                <NavLink to={"/category/laliga"} className={({ isActive}) => isActive? "ActiveOption" : "Option"}>LaLiga</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar