import { useState, createContext } from "react";
import Swal from 'sweetalert2';


const cartContext = createContext({ cart: [] });

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(product, count) {

    const newCart = [...cart];
    if (isInCart(product.id)) {
      const indexUpdate = cart.findIndex((item) => item.id === product.id);
      newCart[indexUpdate].count += count;
      setCart(newCart);
    } else {
      const newItemInCart = { ...product, count };
      newCart.push(newItemInCart);
      setCart(newCart);
    }
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 2000
    })
  }

  function isInCart(id) {
    return cart.some((item) => item.id === id);
  }

  function getItemInCart(id) {
    return cart.find((item) => item.id === id);
  }

  function removeItem(id) {
    
    Swal.fire({
      title: '¿Quieres eliminar este producto del carrito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Borrado!',
          'Eliminado del carrito',
          'success',
          setCart(cart.filter((item) => item.id !== id))
        )
      }
    })
    
  }

  function cancelPurchase(){

    Swal.fire({
      title: '¿Quieres cancelar la compra?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'De vuelta a cart'
        )
      }
    })

  }
  function clearAllCart() {
    Swal.fire({
      title: '¿Quieres vaciar el carrito?',
      text: 'Esta acción eliminará todos los productos del carrito.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, vaciar carrito'
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]); 
        Swal.fire(
          'Carrito vaciado',
          'El carrito ha sido vaciado correctamente.',
          'success'
        );
      }
    });
  }

  function clearCart(){
    return setCart([]); 
  }
  
  function getTotalItemsInCart() {
    let total = 0;
    cart.forEach((item) => {
      total += item.count;
    });
    return total;
  }

  function getTotalPriceInCart() {
    let total = 0;
    cart.forEach((item) => {
      total += item.count * item.precio;
    });
    return total;
  }

  return (
    <cartContext.Provider
      value={{
        getItemInCart,
        cart,
        addToCart,
        removeItem,
        clearAllCart,
        clearCart,
        cancelPurchase,
        getTotalItemsInCart,
        getTotalPriceInCart,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export { cartContext, CartContextProvider };