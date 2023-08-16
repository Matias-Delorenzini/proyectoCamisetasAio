import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../../services/firebase";
import "./OrderConfirm.css"

function OrderConfirm() {
	const [orderData, setOrderData] = useState(null);
	const {id} = useParams();

	useEffect(() => {
		getOrder(id).then((order) => {
			setOrderData(order);
		});
	}, [id]);

	return (
		<div className="Orderconfirm">
			<h1>Gracias por tu compra!</h1>
			{orderData !== null ? (
				<div>
					<p>
						Código de orden de Compra: {orderData.id} <br/>
						Tus productos comprados: 
						{orderData.items.map((item) => {
							return (
								<ul>
									<li>
									{item.count} - $ {item.price} - {item.name}
									</li>
									<br/>
								</ul>
							);
						})}
					</p>
				</div>
			):(<p>Cargando</p>)}
		</div>
	);
}

export default OrderConfirm;
