import './ItemListContainer.css'

function ItemListContainer({ greeting }){
    return(
        <main className="container contenedor-items">{ greeting }</main>
    )
}

export default ItemListContainer;