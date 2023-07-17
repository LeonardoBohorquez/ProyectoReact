import React from 'react'
import { useParams } from 'react-router-dom'
import { productosComputacion } from '../../FakeData/items'

export const ItemCategoryContainer = () => {
    const {categoryId} = useParams()
    const itemsPorCategoria = productosComputacion.filter(( item ) => Number(item.category.id) === Number(categoryId ))
    console.log(itemsPorCategoria)
  return (                                      /* Aqui se arma la estructa de la visualizacion de la carta */
                                                                         /* /////// */
    <div>  {itemsPorCategoria.length > 0 ? itemsPorCategoria.map((item) => item.nombre ): 'No hay producto'}</div>
  )
}