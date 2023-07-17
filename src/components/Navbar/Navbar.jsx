import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='container-fluid contenedor-fluid-menu'>
            <header className='container contenedor-menu'>
                 <h1 className='brand-menu'>FAST-PC</h1>
                 <nav className='nav-menu'>
                    <ul className='ul-menu'>
                        <li><Link to="/" className='btn-menu'>Inicio</Link></li>
                        <li><a href="#" className='btn-menu'>Tienda</a></li>
                        <li><a href="#" className='btn-menu'>Soporte</a></li>
                        <li><a href="#" className='btn-card'><CartWidget/><span className='number'>0</span></a></li>
                    </ul>
                 </nav>
            </header>
        </div>
    );
  }
  
  export default Navbar;