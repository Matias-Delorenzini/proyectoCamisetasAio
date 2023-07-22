import cart from './assets/cart.svg'
import "./CartWidget.css"

const CartWidget = () => {
    return (
        <button className="btn btn-outline-dark ButtonWidget">
            <img src={cart} alt="cart_widget" className='CartImg'/>    
            13
        </button>
    )
}

export default CartWidget