import React from 'react'
import { useParams } from 'react-router-dom'
import { productosComputacion } from '../../../FakeData/items'
import { Link } from 'react-router-dom';
import imagen from '../../../Assets/IMG.JPG'
import './ItemCategoryContainer.css'


export const ItemCategoryContainer = () => {
    const {categoryId} = useParams()
    const itemsPorCategoria = productosComputacion.filter(( item ) => Number(item.category.id) === Number(categoryId ))
    console.log(itemsPorCategoria)
  return (                                     
    <div className="container">
        <div className='row'>  {itemsPorCategoria.length > 0 ? itemsPorCategoria.map((item) => 
          <div className='col col-md-4 col-lg-4 tarjeta'>
                <img  className="img-fluid" src={imagen} alt={item.nombre} />
                    <h2 className=''>{item.nombre}</h2>
                    <h3>{item.category.nombre}</h3>
                    <h3>Precio: {item.precio}$</h3>
                    <Link className='btn' to= {`/item/${item.id}`} > Ver mas... </Link>
          </div> 
       
       )
        : 'No hay producto'}</div>
    </div>
  )
}