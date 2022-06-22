
import { useContext, useState} from "react";
import { CartContext } from "../../Context/CartContext";
import { NavLink } from "react-router-dom"
import Form from "react-bootstrap/Form";


import "./Cart.css";
import { getFirestore, collection, addDoc } from "firebase/firestore";


// FUNCION PARA SUBIR TODOS LOS PRODUCTOS A FIREBASE

// function addDocsFb(){
//   libros.forEach((testItem) => {
//   const db = getFirestore();

//   const queryCollection = collection(db, "productos");

//   addDoc(queryCollection, testItem)
//   .then((resp)=> console.log(resp))
// });}


function Cart() {

  const [show, setShow] = useState(false);

  const [fullscreen, setFullscreen] = useState(true);

  const handleClose = () => setShow(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const {
    cartList,
    vaciarCarrito,
    eliminarUnProducto,
    precioTotal,
  } = useContext(CartContext);

  // ORDEN DE COMPRA HARDCODE

  const generateOrder = () => {

    let order = {};
    order.buyer = {
      name: "Daniel",
      email: "dcamelo1@hotmail.com",
      phone: "3186933889",
    };
    
    order.total= precioTotal();
    order.productos = 
    cartList.map
    ((cartProduct) => {
      const id = cartProduct.id;
      const name = cartProduct.nombre;
      const price = cartProduct.precio * cartProduct.quantity;

      return { id, name, price };
    }); 

    const db = getFirestore();
    const queryCollection = collection(db, "Orden de compra");
    addDoc(queryCollection, order)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err))
      .finally(() => vaciarCarrito()); 
  }

  return cartList.length ? (
    <div className="contenedorCart">
      <div className="contenedorProductosCart">
        <div>
          <table className="table tableMediaQuery">
            <thead className="titulosTabla">

              <tr>
                <th scope="col">PORTADA</th>
                <th scope="col">TÍTULO</th>
                <th scope="col">VALOR</th>
                <th scope="col">CANTIDAD</th>
                <th scope="col">ELIMINAR</th>
              </tr>

            </thead>
            
            <tbody className="tableBody">
              {cartList.map((producto) => (
                <tr key={producto.id}>
                  <th scope="row">
                    <img className="imgCart" src={producto.img} alt="" />
                  </th>
                  <td>{producto.nombre}</td>
                  <td>${producto.precio}</td>
                  <td>{producto.quantity}</td>
                 
                  <td>
                    <button
                      class="noselect botonEliminar"
                      onClick={() => eliminarUnProducto(producto.id)}
                    >
                     X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="footerCart">

        <div className="containerBotonVaciarCarrito">
          <button
            className="botonVaciarCarrito"
            onClick={vaciarCarrito}
          >
           VACIAR CARRITO
          </button>

          </div>
          <p className="total"> TOTAL: ${precioTotal() !== 0 && precioTotal()}</p>
        </div>


         <div className="contenedorForm">
         <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>NOMBRE COMPLETO</Form.Label>
    <Form.Control type="text" placeholder="ingrese su nombre completo" />
  </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>DOMICILIO</Form.Label>
    <Form.Control type="text" placeholder="ingrese su nombre completo" />
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>EMAIL</Form.Label>
    <Form.Control type="email" placeholder="Ingrese su email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>REPITA EMAIL</Form.Label>
    <Form.Control type="email" placeholder="Ingrese su email" />
  </Form.Group>

<div className="containerButtonFinish">
<button className="buttonFinish" onClick={generateOrder}>TERMINAR COMPRA</button>
</div>
</Form>
        </div>
      </div>
    </div>
  ) : (
    <div className="contenedorCarritoVacio1">
      <div className="contenedorCarritoVacio">
        <h2 className="textoCarritoVacio ">CARRITO VACÍO</h2>
        <NavLink
          activeclassname="currentCategory"
          className="text-white"
          to={"/tienda"}
        >
          <button className="botonCartIrTienda">VOLVER A LA TIENDA</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Cart;


