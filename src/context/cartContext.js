import { useState, createContext } from "react";

const cartContext = createContext({ cart: [] });

function CartContextProvider(props) {
    const [cart, setCart] = useState([]);

    function addToCart(product, count) {
        const newCart = [...cart];
        const existingCartItem = cart.find((item) => item.id === product.id);

    if (existingCartItem) {
        const totalSelectedItems = existingCartItem.count + count;
        if (totalSelectedItems > product.stock) {
            return;
        }
        existingCartItem.count += count;
        setCart(newCart);
    } else {
        if (count > product.stock) {
            return;
        }
        const newItemInCart = { ...product, count };
        newCart.push(newItemInCart);
        setCart(newCart);
    }
}

  function isInCart(id) {
    return cart.some((item) => item.id === id);
  }

  function getItemInCart(id) {
    return cart.find((item) => item.id === id);
  }

  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]); 
  }

  function getTotalItemsInCart() {
    let total = 0;
    cart.forEach((item) => {
      total += item.count;
    });
    return total;
  }

  function getTotalPriceInCart() {
    let total = 0;
    cart.forEach((item) => {
      total += item.count * item.price;
    });
    return total;
  }

  return (
    <cartContext.Provider
    value={{
        isInCart,
        getItemInCart,
        cart,
        addToCart,
        removeItem,
        clearCart,
        getTotalItemsInCart,
        getTotalPriceInCart,
    }}
    >
    {props.children}
    </cartContext.Provider>
);
}

export { cartContext, CartContextProvider };
