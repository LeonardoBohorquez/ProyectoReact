import './ItemListContainer.css'
import {productosComputacion} from '../../FakeData/items'
import { listaCategoria } from '../../FakeData/category';
import { Link } from 'react-router-dom';

function ItemListContainer(){
    return(
        <div>
            <div className="container contenedor-items"> {listaCategoria.map( (category) => {
                /* Aqui tiene que ir una tarjeta que muestre cada producto con su imagen,precio, y todos los detalles ye l boton de "mas info.." */
                return <div><Link className='' to= {`/category/${category.id}`} > {category.nombre} </Link></div>
            })} </div>

            <div className="container contenedor-items"> {productosComputacion.map( (item) => {
                /* Aqui tiene que ir una tarjeta que muestre cada producto con su imagen,precio, y todos los detalles ye l boton de "mas info.." */
                return <div>{item.nombre}<Link className='' to= {`/item/${item.id}`} > Mas info.. </Link></div>
            })} </div>
        </div>
    )
}

export default ItemListContainer;