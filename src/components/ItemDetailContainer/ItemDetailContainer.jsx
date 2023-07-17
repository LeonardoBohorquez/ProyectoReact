import React from 'react'
import { useParams } from 'react-router-dom'
import { productosComputacion } from '../../FakeData/items'

export const ItemDetailContainer = () => {
    const {id} = useParams()
    const item = productosComputacion.find(( item ) => Number(item.id) === Number(id))
    console.log(item)
  return (           /* Aqui se arma la estructa de la visualizacion de la carta */
                                      /* /////// */
    <div>  {item !== undefined ? <div>
        {item.nombre}
        <img src= {item.imagen} alt={item.nombre} />
        </div> : 'No se encontro el producto'} </div>
  )
}