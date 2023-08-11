import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const context = useContext(cartContext);

  // Obtener la cantidad total de elementos en el carrito
  const totalItemsInCart = context.getTotalItemsInCart();

  // Mostrar el componente solo si la cantidad es mayor que 0
  return (
    totalItemsInCart > 0 && (
      <Link to="/cart">
        <div>
          🛒
          <span> {totalItemsInCart} </span>
        </div>
      </Link>
    )
  );
}

export default CartWidget;
