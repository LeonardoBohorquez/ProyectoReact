import './ItemListContainer.css'
import {productosComputacion} from '../../../FakeData/items'
import { Link, useParams } from 'react-router-dom';
import imagen from '../../../Assets/IMG.JPG'
import { useState, useEffect } from 'react';



function ItemListContainer(){
    const [items, setItems] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        categoryId ?
        setItems(productosComputacion.filter(prod => prod.category.id == categoryId ))
        :
        setItems(productosComputacion)
    }, [categoryId])

    
    return(
        <main className="container contenedor-items">
                <div className="row">
                    {items.map( (item) => {
                    //renderizamos el catalago
                    return( <div key={item.id} className='col col-md-4 col-lg-4 tarjeta'>
                                <img  className="img-fluid" src={imagen} alt={item.nombre} />
                                <h2 className=''>{item.nombre}</h2>
                                <h3>{item.category.nombre}</h3>
                                <h3>Precio: {item.precio}$</h3>
                                <Link className='btn' to= {`/item/${item.id}`} > Ver mas... </Link> 
                            </div> 
                    )      
            })} </div>
        </main>
    )
}

export default ItemListContainer;