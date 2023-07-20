import cart from './assets/cart.svg'

const CartWidget = () => {
    return (
        <button className="btn btn-outline-dark">
            <img src={cart} alt="cart_widget" />
            13
        </button>
    )
}

export default CartWidget