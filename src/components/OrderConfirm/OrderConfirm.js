import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../../services/firebase";

function OrderConfirm() {
  const [orderData, setOrderData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getOrder(id).then((order) => {
      console.log(order);
      setOrderData(order);
    });
  }, [id]);

  return (
    <div>
      <h1>Gracias por tu compra! </h1>
      {orderData !== null ? (
        <div>
          <p>
            Tus productos comprados: 
            {orderData.items.map((item) => {
              return (
                <ul>
                  <li>
                  {item.count} - {item.name}
                  </li>
                  <br/>
                </ul>
              );
            })}
          </p>
        </div>
      ) : (
        <p>Cargando</p>
      )}
    </div>
  );
}

export default OrderConfirm;
