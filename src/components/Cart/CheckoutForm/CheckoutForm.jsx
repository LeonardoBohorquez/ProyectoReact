import React, { useContext, useState } from 'react'
import { cartContext } from '../../../Context/CartContext'
import { useNavigate } from "react-router-dom";
import { createOrder } from '../../../FakeData/firebase';
import './CheckoutForm.css'
import Swal from 'sweetalert2';


export const CheckoutForm = () => {
  const [buyer, setBuyer] = useState({
    nombre: "",
    apellido: "",
    celular: "",
    direccion: "",
    correo: ""
  });

  const navigate = useNavigate();
  const { cart, getTotalPriceInCart} = useContext(cartContext);

  async function handleCheckout(evt) {
    evt.preventDefault();
    const orderData = {
      items: cart,
      buyer: buyer,
      total: getTotalPriceInCart(),
    };

    try {
      const idOrder = await createOrder(orderData);
      navigate(`/order-confirmation/${idOrder}`);
    } catch (error) {
      alert(`No se pudo realizar la compra ${error.message}`);
    }
  }

  function onInputChange(evt) {
    const value = evt.target.value;
    const field = evt.target.name;
    const newState = { ...buyer };
    newState[field] = value;
    setBuyer(newState);
  }
  function resetForm(e) {
    e.preventDefault();
    setBuyer({
      nombre: "",
      apellido: "",
      celular: "",
      direccion: "",
      correo: ""
    });
  }
  function cancelPurchase(e){
    e.preventDefault();
    Swal.fire({
      title: '¿Quieres cancelar la compra?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
          navigate('/cart')
      }
    });
  }

  return (
    <form className='container container-formulario'>
      <h2 className='titulo-formulario'>FORMULARIO DE FACTURACION</h2>
      <div className='grupo-input'>
        <input  placeholder='Nombre' value={buyer.nombre} name="nombre" type="text" onChange={onInputChange}/>
      </div>
      <div className='grupo-input'>
        <input placeholder='Apellido' value={buyer.apellido} name="apellido" type="text" onChange={onInputChange}/>
      </div>
      <div className='grupo-input'>
        <input placeholder='Numero celular' value={buyer.celular} name="celular" type="number" onChange={onInputChange}/>
      </div>
      <div className='grupo-input'>
        <input placeholder='Direccion' value={buyer.direccion} name="direccion" type="text" onChange={onInputChange}/>
      </div>
      <div className='grupo-input'>
        <input placeholder='Correo' value={buyer.correo} name="correo" type="email" onChange={onInputChange} required/>
      </div>
      <div className='btn-formulario'>
        <button className='btn-comprar' onClick={handleCheckout} disabled={!(buyer.nombre !== "" && buyer.apellido !== "" && buyer.celular !== "" && buyer.direccion !== "" && buyer.correo !== "")}> Confirmar</button>
        <button  className='btn-reiniciar' onClick={resetForm}>Reiniciar</button>
        <button  className='btn-cancelar' onClick={cancelPurchase}>Cancelar</button>
      </div>
    </form>
  )
}
