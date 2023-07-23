import './Navbar.css'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget/CartWidget';
import { listaCategoria } from '../../FakeData/category';
function Navbar() {
    return (
        <div className='container-fluid contenedor-fluid-menu'>
            <header className='container contenedor-menu'>
                 <h1 className='brand-menu'><Link to="/" className='btn-menu'>FAST-PC</Link></h1>
                 <nav className='nav-menu-category'>
                    <ul className='ul-menu-category'>
                        <li className='gama '> {listaCategoria.map( (category) => {
                                /* Aqui tiene que ir una tarjeta que muestre cada producto con su imagen,precio, y todos los detalles ye l boton de "mas info.." */
                             return <div className='item'><Link className='' to= {`/category/${category.id}`} > {category.nombre} </Link></div>
                            })} 
                        </li>  
                    </ul>
                 </nav>
                 <nav className='nav-menu'>
                    <ul className='ul-menu'>  
                        <li><Link to="/" className='btn-menu'>Inicio</Link></li>
                        <li><a href="#" className='btn-menu'>Soporte</a></li>
                        <li><a href="#" className='btn-card'><CartWidget/><span className='number'>0</span></a></li>
                    </ul>
                 </nav>
            </header>
        </div>
    );
  }
  
  export default Navbar;