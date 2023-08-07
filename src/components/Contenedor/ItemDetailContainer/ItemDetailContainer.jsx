import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productosComputacion } from '../../../FakeData/items'
import imagen from '../../../Assets/IMG.JPG'
import './ItemDetailContainer.css'
import BtnRemove from './Botones/BtnRemove'
import BtnAdd from './Botones/BtnAdd'
import { cartContext } from '../../../Context/CartContext'


export const ItemDetailContainer = () => {
    const {id} = useParams()
    const item = productosComputacion.find(( item ) => Number(item.id) === Number(id))
    const [cantidad, setCantidad] = useState( 1 )

    const {addToCart} = useContext(cartContext)

  return (      
    // Armamos la card del item con los detalles     
        <main className='container container-detail'>  {item !== undefined ? 
          <div className='item-detail'>
            <div className='img-detail-container'>
              <img  className='img-fluid'src= {imagen} alt={item.nombre} />
              <div className="detail">
                <h2 className='titulo-detail'>{item.nombre}</h2>
                <h3>Procesador: {item.marca} </h3>
                <h3>Precio: {item.precio}$ </h3>
                <h3>{item.category.nombre}</h3>
                <h3>Stock: {item.stock}</h3>
                <p> {item.descripción} </p>
                <div className='container-stock'>
                  <button className='btn-stock' onClick={() => cantidad > 1 && setCantidad(cantidad - 1)}><BtnRemove/></button>
                  <span className='number-stock'> {cantidad} </span>
                  <button className='btn-stock' onClick={()=> cantidad < item.stock && setCantidad(cantidad + 1) }><BtnAdd/></button>
                  <button className='anadir-carrito' onClick={() => addToCart(item,cantidad)}> Añdir al carrito</button>
                </div>
              </div>
            </div>
          </div> 
            : 'No se encontro el producto'} 
        </main>
  )
}