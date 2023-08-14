
/* import { PcGaming} from '../../../FakeData/asyncMock' */
import { getData } from '../../../FakeData/firebase'
import { getCategoryData } from '../../../FakeData/asyncMock'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Grid } from  'react-loader-spinner'
import imagen from '../../../Assets/IMG.JPG'
import './ItemListContainer.css'

function ItemListContainer(){
    const [items, setItems] = useState([])
    const { categoryId } = useParams()
    const [isLoading, setIsLoading] = useState(true);
   

    /* useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1500));
      
            categoryId ? 
            setItems(PcGaming.filter((pc) => pc.categoria === categoryId))
              : 
            setItems(PcGaming);
      
            setIsLoading(false);
          };
          fetchData();

    }, [categoryId]) */

    useEffect(() => {
      setIsLoading(true);
      async function requestProducts() {
        let respuesta = categoryId
          ? await getCategoryData(categoryId)
          : await getData();
        setItems(respuesta);
        setIsLoading(false);
      }
  
      requestProducts();
    }, [categoryId]);

    if (isLoading) {

        return <div className='loader'>{<Grid height="150" width="150" color="#00a1ce" ariaLabel="grid-loading" radius="12.5" wrapperStyle={{}} wrapperClass=""  visible={true}/>}</div>

      }else{ 

        return <main className="container contenedor-items">
                    <div className="row">
                        {items.map( (item) => {
                        return( 
                                <div key={item.id} className='col col-md-4 col-lg-4 tarjeta'>
                                    <img  className="img-fluid" src={imagen} alt={item.nombre} />
                                    <h2 className=''>{item.nombre}</h2>
                                    <h3>Gama: {item.categoria}</h3>
                                    <h3>Precio: {item.precio}$</h3>
                                    <Link className='btn' to= {`/item/${item.id}`} > Ver mas... </Link> 
                                </div> 
                            )         
                        })} </div>
                </main>
    
    }
}

export default ItemListContainer;