import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Contenedor/ItemListContainer';


function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="¡Hola, bienvenido!" />
    </>
  );
}

export default App;
