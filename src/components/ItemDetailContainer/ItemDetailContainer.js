import { useState, useEffect, useContext } from "react";
import { getProductData } from "../../services/firebase";
import { useParams } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import ItemDetail from "./ItemDetail/ItemDetail";

function ItemDetailContainer(){
    const [product, setProduct] = useState({});
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const {id} = useParams();
    const {addToCart, getItemInCart} = useContext(cartContext);
    const itemInCart = getItemInCart(id);
    const maxItems = itemInCart ? product.stock - itemInCart.count : product.stock;

    useEffect(() => {
        async function requestProduct(){
        const respuesta = await getProductData(id);
        setProduct(respuesta);
        }
        requestProduct();
    }, [id]);

    function handleAddToCart(clickCount){
        addToCart(product, clickCount);
        setIsAddedToCart(true);
    }

    return (
        <ItemDetail product={product} maxItems={maxItems} isAddedToCart={isAddedToCart} onAddToCart={handleAddToCart} itemInCart={itemInCart}/>
    );
}

export default ItemDetailContainer;
