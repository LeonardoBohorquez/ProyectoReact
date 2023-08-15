import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../../../FakeData/firebase";
import { cartContext } from '../../../Context/CartContext'
import { Link } from 'react-router-dom';
import './OrderConfirm.css'

export const OrderConfirm = () => {
    const [orderData, setOrderData] = useState(null);
    const { getTotalPriceInCart, clearCart } = useContext(cartContext);
    const { id } = useParams();

    useEffect(() => {
      getOrder(id).then((order) => {
        setOrderData(order);
      });
   
    }, []);
  
    return (
      <div className="container compra-detalle-container">
        <h1 className="">COMPRA REALIZADA</h1>
        {orderData !== null ? (
          <div className="factura">
            <div className="compra">
              {orderData.items.map((item) => {
                return (
                  <div  className="small" key={item.id}>
                    <h3>PRODUCTO: {item.nombre} </h3>
                    <h3>PRECIO: {item.precio}$ </h3>
                    <h3>CANTIDAD:  {item.count} </h3>
                    <h3>TOTAL: {item.count * item.precio}$ </h3>
                  </div>
                );
              })}
            </div>
            <h2 className="total-pago">TOTAL PAGADO: {getTotalPriceInCart()}$ </h2>
            <h4 className="total-pago">Numero de seguimiento: {id} </h4>
            <div>
            <Link to="/" className='btn-nueva-compra' onClick={clearCart}>Realizar otra compra</Link>
            </div>
          </div>
        ) : (
          <p>Cargando</p>
        )}
      </div>
    );
};

export default OrderConfirm;
