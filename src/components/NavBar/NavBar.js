import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Pivot Camisetas</h3>
            <div>
                <button className="btn btn-primary">Clubes</button>
                <button className="btn btn-primary">Selecciones Nacionales</button>
                <button className="btn btn-primary">Ediciones Especiales</button>
                <button className="btn btn-primary">Retro</button>
                <button className="btn btn-primary">Temporadas Futuras</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar