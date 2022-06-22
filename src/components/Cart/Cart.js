
import { useContext} from "react";
import { CartContext } from "../../Context/CartContext";
import { NavLink } from "react-router-dom"



import "./Cart.css";
import Formulario from "../Form/Form";


function Cart() {

  const {
    cartList,
    vaciarCarrito,
    eliminarUnProducto,
    precioTotal,
  } = useContext(CartContext);    

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
                    > X                    
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
      <Formulario/>
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


