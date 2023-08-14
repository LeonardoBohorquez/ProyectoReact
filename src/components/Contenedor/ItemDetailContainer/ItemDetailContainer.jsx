import React, { useContext, useState, useEffect } from 'react'
import { cartContext } from '../../../Context/CartContext'
import { useParams } from 'react-router-dom'
import { getProductData } from '../../../FakeData/firebase'
import imagen from '../../../Assets/IMG.JPG'
import BtnRemove from './Botones/BtnRemove'
import BtnAdd from './Botones/BtnAdd'
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {
    const {id} = useParams()
    const [item, setItem] = useState({});
    const [cantidad, setCantidad] = useState( 1 )
    const {addToCart} = useContext(cartContext)
    /*  const item = PcGaming.find(( item ) => Number(item.id) === Number(id)) */

    useEffect(() => {
      async function requestProduct() {
        const respuesta = await getProductData(id);
        setItem(respuesta);
      }
  
      requestProduct();
    }, [id]);
    
  return (        
        <main className='container container-detail'>  {item !== undefined ? 
          <div className='item-detail'>
            <div className='img-detail-container'>
              <img  className='img-fluid'src= {imagen} alt={item.nombre} />
              <div className="detail">
                <h2 className='titulo-detail'>{item.nombre}</h2>
                <h3>Procesador: {item.procesador} </h3>
                <h3>Video: {item.video} </h3>
                <h3>RAM: {item.ram} </h3>
                <h3>Precio Unitario: {item.precio}$ </h3>
                <h3>Gama: {item.categoria}</h3>
                <h3>Stock: {item.stock}</h3>
                <h4>Descripcion: {item.descripcion} </h4>
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