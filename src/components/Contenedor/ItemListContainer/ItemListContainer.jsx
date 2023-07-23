import './ItemListContainer.css'
import {productosComputacion} from '../../../FakeData/items'
import { Link } from 'react-router-dom';
import imagen from '../../../Assets/IMG.JPG'


function ItemListContainer(){
    return(
        <main className="container contenedor-items">
                <div className="row">{productosComputacion.map( (item) => {
                    return <div className='col col-md-4 col-lg-4 tarjeta'>
                                <img  className="img-fluid" src={imagen} alt={item.nombre} />
                                <h2 className=''>{item.nombre}</h2>
                                <h3>{item.category.nombre}</h3>
                                <h3>Precio: {item.precio}$</h3>
                                <Link className='btn' to= {`/item/${item.id}`} > Ver mas... </Link>
                            </div>       
            })} </div>
        </main>
    )
}

export default ItemListContainer;