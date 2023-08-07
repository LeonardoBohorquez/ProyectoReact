import React, { useContext } from 'react'
import { cartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

export const CartItem = () => {
    const {cart, removeItem, getTotalItemsInCart,getTotalPriceInCart} = useContext(cartContext)

  return (
    <div>
        <ul>
            {cart.map(item => (
                <li key={item.id}> 
                Nombre: {item.nombre} ---- Cantidad: {item.count}
                <button onClick={() => removeItem(item.id)}> Eliminar producto </button>
                </li>

            ))}
        </ul>

        <p>Precio total: {getTotalPriceInCart()} </p>
        <Link to="/checkout">Comprar</Link>
    </div>
  )
}
