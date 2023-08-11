import "./Item.css"
import { Link } from 'react-router-dom';

const Item = (props) => {
    const { id, name, price, stock, img} = props;

    return (
            <Link to={`/product/${id}`} className="Link">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Unidades disponibles: {stock}
                </p>
            </section>
            </Link>
    )
}

export default Item