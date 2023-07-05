import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
    return (
        <div className='container-fluid contenedor-fluid-menu'>
            <header className='container contenedor-menu'>
                 <h1 className='brand-menu'>FAST-PC</h1>
                 <nav className='nav-menu'>
                    <ul className='ul-menu'>
                        <li><a href="www.google.com" className='btn-menu'>Inicio</a></li>
                        <li><a href="www.google.com" className='btn-menu'>Tienda</a></li>
                        <li><a href="www.google.com" className='btn-menu'>Soporte</a></li>
                        <li><a href="www.google.com" className='btn-card'><CartWidget/></a></li>
                    </ul>
                 </nav>
            </header>
        </div>
    );
  }
  
  export default Navbar;