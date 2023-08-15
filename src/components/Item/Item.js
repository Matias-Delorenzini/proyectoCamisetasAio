import "./Item.css"
import { Link } from 'react-router-dom';

const Item = (props) => {
    const { id, name, price, stock, img } = props;

    return (
        <Link to={`/product/${id}`} className="Link">
            <div className="Picture">
                <img src={img} alt={name} className="ItemImg"/>
            </div>
            <div className="Info">
                <h2 className="ItemHeader">{name}</h2>
                <p className="Price">Precio: ${price}</p>
                <p className="Stock">Stock: {stock}</p>
            </div>
        </Link>
    )
}

export default Item