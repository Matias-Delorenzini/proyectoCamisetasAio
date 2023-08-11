import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import "./Navbar.css"

export default function NavBar() {
    return (
        <nav>
            <Link to={'/'}>
                <h3 className="h3Title">CAMISETAS STORE</h3>
            </Link>
            <ul>
                <li>
                    <Link className="nav-link" to="/category/premier">premier</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/category/seriea">seriea</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/category/bundesliga">bundesliga</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/category/laliga">laliga</Link>
                </li>
            </ul>
            <CartWidget />
        </nav>
    )
}




