import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import cart from './assets/cart.svg'

function CartWidget() {
    const context = useContext(cartContext);
    const totalItemsInCart = context.getTotalItemsInCart();
    
    if (totalItemsInCart <= 0 ){} else {
        return (
            <Link to="/cart">
                <div>
                    <img className="CartImg" src={cart} alt="cart-widget"/>
                    <span> {totalItemsInCart} </span>
                </div>
            </Link>
        )
    } 
}

export default CartWidget;
