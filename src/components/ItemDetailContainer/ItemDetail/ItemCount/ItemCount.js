import React, { useState } from "react";
import "./ItemCount.css"

function ItemCount(props) {
    const [clickCount, setClickCount] = useState(1);

    function handleClickAdd() {
        if (clickCount === props.stock) {
        } else {
            setClickCount(clickCount + 1);
        }
    }
    function handleClickSub() {
        if (clickCount > 1) {
            setClickCount(clickCount - 1);
        }
    }

    return (
    <div>
        <div className="ItemCountContainer">
            <button disabled={props.stock === 0} className="ControlButton" onClick={handleClickSub}>-</button>
            <h2 className="AddNumber">{clickCount}</h2>
            <button disabled={props.stock === 0} className="ControlButton" onClick={handleClickAdd}>+</button>
        </div>
        <button disabled={props.stock === 0} onClick={() => props.onConfirm(clickCount)} className="ControlButton"><h4>Añadir al carrito</h4></button>
    </div>
    );
}
export default ItemCount;