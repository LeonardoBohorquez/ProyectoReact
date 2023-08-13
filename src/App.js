import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  ItemListContainer  from './components/Contenedor/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/Contenedor/ItemDetailContainer/ItemDetailContainer'
import { CartItem } from './components/Cart/CartItem/CartItem';
import { CheckoutForm } from './components/Cart/CheckoutForm/CheckoutForm';
import { CartContextProvider } from './Context/CartContext';


function App() {
  return (
    <>
    <CartContextProvider>
      <BrowserRouter> 
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>} />
            <Route path="/category/:categoryId" element={<ItemListContainer/>} />
            <Route path="/cart" element={<CartItem />} />
            <Route path="/checkout" element={<CheckoutForm />} />
          </Routes>
      </BrowserRouter>
    </CartContextProvider>
    </>
  );
}

export default App;
