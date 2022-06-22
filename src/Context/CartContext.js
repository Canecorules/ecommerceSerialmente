import { addDoc, collection, getFirestore } from "firebase/firestore";
import { createContext, useState } from "react";

export const CartContext = createContext([]);

function CartContextProvider({ children }) {  

  const [cartList, setcartList] = useState([]);

  function añadirAlCarrito(item) {
    const indice = cartList.findIndex((producto) => producto.id === item.id);

    if (indice !== -1) { 
      const cantidadVieja = cartList[indice].quantity;
      cartList[indice].quantity =cantidadVieja+item.quantity
      setcartList([...cartList])
   
    } else {
      setcartList([...cartList, item]);
    }
  }

  function eliminarUnProducto(id){
    setcartList(cartList.filter(prod=>prod.id !== id))
  }
 
  function vaciarCarrito() {
    setcartList([]);
  }

  function cantidadTotal(){

    return cartList.reduce((contador,producto)=>contador+=producto.quantity,0)

  }

  function precioTotal(){

    return cartList.reduce((contador,producto)=>contador + (producto.quantity*producto.precio),0)
  } 

  const purchaseOrder = (e) => {    
    const inputFirst = document.getElementById("firstName").value;

    const inputLast = document.getElementById("lastName").value;

    const inputCellPhone = document.getElementById("cellPhone").value;

    const inputAddress = document.getElementById("address").value;

    const inputEmail = document.getElementById("email").value;

    const inputEmailRepeat = document.getElementById("formEmailRepeat").value;

    if (inputEmail === inputEmailRepeat) {

      if (
        inputFirst !== "" &&
        inputLast !== "" &&
        inputEmail !== "" &&
        inputEmailRepeat !== "" &&
        inputCellPhone !== "" &&
        inputAddress !== ""
      ) {
        e.preventDefault(e);
        let order = {};
        
        order.date = new Date();

        order.buyer = {
          name: inputFirst,
          surname: inputLast,
          phone: inputCellPhone,
          address: inputAddress,
          email: inputEmail,
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
      .finally(() =>{
        vaciarCarrito()        
        alert("Compra Realizada")
      } ); 
      }

    } 
    else {
      alert("Revise su informacion");
    }
  }

  return (
    <div>
      <CartContext.Provider value={{ cartList, añadirAlCarrito, vaciarCarrito, eliminarUnProducto,cantidadTotal,precioTotal, purchaseOrder }}>
        {children}
      </CartContext.Provider>
    </div>
  );
}

export default CartContextProvider;

