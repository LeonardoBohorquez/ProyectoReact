import './Navbar.css'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget/CartWidget';
import { useContext } from 'react';
import { cartContext } from '../../Context/CartContext';


function Navbar() {
    const {getTotalItemsInCart} = useContext(cartContext)

    return (
        <div className='container-fluid contenedor-fluid-menu'>
            <header className='container contenedor-menu'>
                 <h1 className='brand-menu'><Link to="/" className='btn-menu'>FAST-PC</Link></h1>
                 <nav className='nav-menu-category'>
                    <ul className='ul-menu-category'>
                        <li className='gama '> 
                            <Link to={`category/Baja`}>Gama Baja</Link>
                        </li>  
                        <li className='gama '> 
                            <Link to={`category/Media`}>Gama Media</Link>
                        </li> 
                        <li className='gama '> 
                            <Link to={`category/Alta`}>Gama Alta</Link>
                        </li> 
                    </ul>
                 </nav>
               <Link to={`cart`} className='cart'> <CartWidget/>{getTotalItemsInCart()}</Link>
            </header>
        </div>
    );
  }
  
  export default Navbar;