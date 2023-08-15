import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount/ItemCount";
import "./ItemDetail.css";

function ItemDetail({ product, maxItems, isAddedToCart, onAddToCart, itemInCart }) {
    const getCategoryText = (category) => {
    switch (category) {
        case "premier":
            return "Ver más de la Premier League";
        case "laliga":
            return "Ver más de LaLiga";
        case "seriea":
            return "Ver más de la Serie A";
        case "bundesliga":
            return "Ver más de Bundesliga";
        default:
            return "Ver más de otros productos";
    }
};

    return (
        <div>
            <Link to={`/category/${product.category}`} className="BackButton">
                {getCategoryText(product.category)}
            </Link>
            <br />
            <div className="Details">
                <div className="PictureContainer">
                    <img src={product.img} alt="imagen" className="DetailPicture" target="_blank" />
                </div>
                <div className="InfoContainer">
                    <h4 className="ProductTitle">{product.name}</h4>
                    <h4 className="ProductPrice">$ {product.price}</h4>
                    <small className="ProductP">{product.description}</small>
                    {product.stock > 0 ? ( isAddedToCart ? (
                        <div>
                            <ItemCount stock={maxItems} onConfirm={onAddToCart} />
                        </div>) : (
                        <ItemCount stock={maxItems} onConfirm={onAddToCart} />)) : (
                            <p className="OutOfStock">No hay stock disponible</p>
                    )}
                    {itemInCart && (
                        <h2 className="h2AddedInfo">{itemInCart.count} en el carrito</h2>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;