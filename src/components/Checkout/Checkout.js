import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../services/firebase";
import { useContext, useState } from "react";
import "./Checkout.css"

function Checkout() {
    const [buyer, setBuyer] = useState({
        firstname: "",
        lastname: "",
        creditcard: "",
    });

    const navigate = useNavigate();
    const {cart, getTotalPriceInCart} = useContext(cartContext);

    async function handleCheckout(evt) {
        evt.preventDefault();
        const orderData = {
            items: cart,
            buyer: buyer,
            date: new Date(),
            total: getTotalPriceInCart(),
        };
    try {
        const idOrder = await createOrder(orderData);
        navigate(`/order-confirmation/${idOrder}`);
    } catch (error) {
        alert(`No se pudo realizar la compra ${error.message}`);
    }
}

    function onInputChange(evt) {
        const value = evt.target.value;
        const field = evt.target.name;
        const newState = { ...buyer };
        newState[field] = value;
        setBuyer(newState);
    }

    function resetForm(e){
        e.preventDefault();
        setBuyer({
            firstname: "",
            lastname: "",
            creditcard: "",
        });
    }

    return (
        <form className="FormCheckout">
            <h2>Completa tus datos para completar la compra</h2>
            <div className="CheckoutInput">
                <label htmlFor="lastname" className="LabelInput">Nombre</label>
                <input value={buyer.firstname} name="firstname" type="text" onChange={onInputChange}/>
            </div>
            <div className="CheckoutInput">
                <label htmlFor="lastname" className="LabelInput">Apellido</label>
                <input value={buyer.lastname} name="lastname" type="text" onChange={onInputChange}/>
            </div>
            <div className="CheckoutInput">
                <label className="LabelInput">Número de Tarjeta</label>
                <input value={buyer.creditcard} name="creditcard" type="number" onChange={onInputChange}/>
            </div>
            <button className="CheckoutButton" disabled={!(buyer.firstname !== "" && buyer.lastname !== "" && buyer.creditcard !== "")} onClick={handleCheckout}>Confirmar
            </button>
            <button onClick={resetForm} className="CheckoutButton">Cancelar</button>
        </form>
        );
}

export default Checkout;
