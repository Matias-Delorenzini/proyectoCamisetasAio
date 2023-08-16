import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import cartwidget from './assets/cart.svg'

function Cart() {
    const { cart, removeItem, clearCart } = useContext(cartContext);
    const totalAmount = cart.reduce((total, item) => total + item.price * item.count, 0);

    return (
        <div className="Cart">
            <img className="CartImg" src={cartwidget} alt="cart-widget"/>
            {cart.length > 0 ? (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} className="CartItem">
                            <Link to={`/product/${item.id}`}>
                                <h3>{item.name}</h3>
                            </Link>
                            {Array.from({ length: item.count }, (_, index) => (
                                <img key={index} width={50} src={item.img} alt="Cart Item Icon" />
                            ))}
                             <div>
            <p>Precio unitario: ${item.price}</p>
            <p>Cantidad: {item.count}</p>
            <p>Precio total: ${item.count * item.price}</p>
            <button onClick={() => removeItem(item.id, false)} className="Remove">Eliminar uno</button>
            {item.count > 1 && (
                <button onClick={() => removeItem(item.id, true)} className="Remove">Eliminar producto</button>
            )}
        </div>
                        </div>
                    ))}
                    <br />
                    <div className="CartControls">
                        <Link to="/checkout" className="ToCheckout">Comprar</Link>
                        <div>Total a pagar: ${totalAmount}</div>
                        <button onClick={clearCart} className="EmptyCart">Vaciar Carrito</button>
                    </div>
                </div>
            ) : (
                <div className="EmptyCartMessage">Carrito vacío</div>
            )}
        </div>
    );
}

export default Cart;
