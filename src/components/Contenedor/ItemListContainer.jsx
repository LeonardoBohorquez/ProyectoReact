import './ItemListContainer.css'

function ItemListContainer({ greeting }){
    return(
        <div className="container contenedor-items">{ greeting }</div>
    )
}

export default ItemListContainer;