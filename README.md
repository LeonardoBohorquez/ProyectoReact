PRYECTO: LEONARDO BOHORQUEZ

- CARRITO DE COMPRA DE PC GAMING.
- NOMBRE DE TIEDA: FAST-PC.
- CREACIONES DE  CATEGRIA : GAMA ALTA - GAMA MEDIA - MABA BAJA.
- CREACION DE CARRITO DE COMPRA (ICONO LADO DERECHO).

- PRESIONAR EL NOMBRE DE LA TIENDA TE MUESTRA TODO EL INVENTARIO (ALOJADO EN EL FIREBASE).
- PRESIONAR EL BOTON DE GAMA BAJA TE MUESTRA SOLO LOS ITEM DE GAMA BAJA.
- PRESIONAR EL BOTON DE GAMA MEDIA TE MUESTRA SOLO LOS ITEM DE GAMA MEDIA.
- PRESIONAR EL BOTON DE GAMA ALTA TE MUESTRA SOLO LOS ITEM DE GAMA ALTA.
- PRESIONAR EL BOTON CARRITO TE MOSTRA LO QUE HAY DENTRO.

- EL INICIO DEL CARRITO MOSTRARA 10 ITEMS EL CUAL SON EXTRAIDO DE FIBREBASE.
- CADA ITEM MOSTRARA  UNA IMG Y LAS SIGUIENTES PROPIEDADES: "NOMBRE", "CATEGORIA", "PRECIO" Y UN BOTON DE "VER MAS DETALLE"
- AL PRESIONAR EL BOTON DE "VER MAS..." SE MOSTRARA TODAS LAS PROPIEDADES DEL ITEM SELECIONADO.
- EN EL DETALLE DEL ITEM SELECCIONADO HAY 2 BOTONES CON LOS SIMBOLOS "+" Y "-" QUE CUMPLEN LA FUNCION DE SUMAR O RESTAR LA CANTIDAD (NO PASA DEL STOCK MOSTRADO).
- EN EL DETALLE TAMBIEN HABRA UN BOTON DE "AÑADIR AL CARRITO" EL CUAL CUMPLE LA FUNCION DE ALMACENAR ESE ITEM EN EL CARRITO.

- EN EL CARRITO SE MOSTRARA LOS ITEMS AGREGADOS EL CUAL SOLO MOSTRARA LAS SIGUIENTES PROPIEDADES "NOMBRE", "GAMA", "PRECIO", "COUNT", "TOTAL"(CANTIDAD POR EL PRECIO DEL ITEM)
- CADA ITEM EN EL CARRITO TIENE UN BOTON DE ELIMINAR PARA SACAR EL ITEM DEL CARRITO
- EN EL CARRITO SE MOSTRARA PRECIO TOTAL A PAGAR ( LA SUMATORIA TORAL DE TODO LOS PRODUCTOS QUE EXISTE EN EL CARRITO)
- EN EL CARRITO SE MOSTRARA CANTIDAD DE PRODUCTO ( MUSTRA LA CANTIDAD  TOTAL DE LOS ITEM EN EL CARRITO)
- EN EL CARRITO EXISTEN 2 BOTONES "COMPRAR"(TE LLEVA A UN FORMULARIO PARA FINALIZAR LA COMPRA), "VACIAR CARRITO"(ELIMINA TODO LOS ITEM EN EL CARRITO) 
- EN CASO DE QUE NO EXISTE NINGUN ITEM EN EL CARRITO NO SE MOSTRARA NADA, SOLO EL MENSAJE "CARRITO VACIO".

- EN EL FORMULARIO DE FACTURACION SE CREO UN FORMULARIO SIMPLE QUE TIENE LOS SIGUIETNES CAMPOS "NOMBRE", "APELLIDO", "NUMERO", "DIRECCION", "CORREO".
- EN EL FORMULARIO EXISTE 3 BOTONES: 
    - CONFIRMAR (SI TODOS LOS CAMPOS ESTAN LLENOS, EJECUTA LA COMPRA, ENVIADO LA ORDEN A FIREBASE)
    - REINICIAR (BORRA TODO LOS DATOS DENTRO DEL FORMULARIO)
    - CANCELAR (CANCELA LA COMPRA DEVOLVIENDO AL CARRITO DE COMPRA)

- AL REALIZAR LA COMPRA SE MOSTRARA EL DETALLE DE LA COMPRA REALIZADA  DONDE MUESTRA TODOS LOS ITEM COMPRANDO CON LAS SIGUIENTES PROPIEDADES "NOMBRE", "PRECIO", "CANTIDAD", "TOTAL".
- EN EL DETALLE DE COMPRA SE MOSTRARA TAMBIEN EL TOTAL PAGADO Y EL NUMERO DE SEGUIMIENTO (ID AGREGADO POR FIREBASE)
- EN EL DETALLE HABRA UN BOTON DE "REALIZAR OTRA COMPRA" EL CUAL LO ENVIARA AL INICIO DEL CARRITO DE COMPRA (TAMBIEN EJECUTARA LA FUNCION DE VACIAR CARRITO)

- TODA LA APLICACION SE LE AGREGO SWEETALERT.
- SE DEJA SOLO LA DATA DE FIREBASE, ELIMINANDO LA ANTERIOR PARA DEJAR CLARO QUE TODOS LOS ITEM VIENEN DEL FIREBASE.