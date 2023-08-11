import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";


function CartContainer() {
  const { cart, removeItem, clearCart } = useContext(cartContext);

  // Calcular la suma total de los precios
  const totalAmount = cart.reduce((total, item) => total + item.price * item.count, 0);

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          {Array.from({ length: item.count }, (_, index) => (
            <img key={index} width={50} src={item.img} alt="imagen" />
          ))}
          <p>Precio unitario: ${item.price}</p>
          <p>Cantidad: {item.count}</p>
          <p>Precio total: ${item.count * item.price}</p>
          <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
      ))}
      <br />
      <div>Total a pagar: ${totalAmount}</div>
      <button onClick={clearCart}>Vaciar Carrito</button>
      <Link to="/checkout">Comprar</Link>
    </div>
  );
}

export default CartContainer;
