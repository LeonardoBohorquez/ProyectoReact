import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  ItemListContainer  from './components/Contenedor/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/Contenedor/ItemDetailContainer/ItemDetailContainer'
import { ItemCategoryContainer } from './components/Contenedor/ItemCategoryContainer/ItemCategoryContainer'



function App() {
  return (
    <>
      <BrowserRouter> 
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/category/:categoryId" element={<ItemCategoryContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
