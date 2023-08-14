import React, { useContext} from 'react'
import { cartContext } from '../../../Context/CartContext'
import { Link } from 'react-router-dom'
import imagen from '../../../Assets/IMG.JPG'
import './CartItem.css'


export const CartItem = () => {
    const {cart, removeItem, getTotalItemsInCart,getTotalPriceInCart, clearCart} = useContext(cartContext)
    const titulo = () => cart.length === 0 ? "CARRITO VACIO" : "PRODUCTOS EN CARRITO"

  return (
    <main className='container'>
      <h1 className='titulo-carrito'> {titulo()} </h1>
        <ul className=''>
            {cart.map(item => (
                <li key={item.id} className='row item-cart'> 
                <div className='col-md-4 img-container'>
                  <img  className="img-fluid img" src={imagen} alt={item.nombre} />
                </div>
                <div className='col-md-5 detalles'>
                  <h2>{item.nombre} </h2>
                  <h3>Gama: {item.categoria} </h3>
                  <h3>Precio Unitario: {item.precio}$ </h3>
                  <h3>Cantidad: {item.count} </h3>
                  <h3>Total: {item.count * item.precio}$</h3>
                </div>
                <div className='col-md-3 btn-eliminar'>
                  <button className='' onClick={() => removeItem(item.id)}> Eliminar </button>
                </div>
                </li>
            ))}
        </ul>
        {cart.length > 0 && (
                <div className='detalle-compra'>
                    <p className='total-cart'>Precio total a pagar: {getTotalPriceInCart()}$ </p>
                    <p className='total-item-cart'>Cantidad de productos: {getTotalItemsInCart()} </p>
                    <Link className='comprar' to="/checkout">Comprar</Link>
                    <button className="borrar-todo" onClick={clearCart}>Vaciar Carrito</button>
                </div>
            )}
      </main>
  )
}
