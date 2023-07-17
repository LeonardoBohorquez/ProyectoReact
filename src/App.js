import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Contenedor/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemCategoryContainer } from './components/ItemCategoryContainer/ItemCategoryContainer';



function App() {
  return (
    <>
      <BrowserRouter> 
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Contenedor List Item"/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/category/:categoryId" element={<ItemCategoryContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
