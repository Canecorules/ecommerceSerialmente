import { addDoc, collection, getFirestore } from "firebase/firestore";
import { createContext, useState } from "react";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext([]);

function CartContextProvider({ children }) {  
  
  const [cartList, setcartList] = useState([]);

  function toastify(text, time) {
    toast(text, {
      position: "top-center",
      autoClose: time,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "toastify",
    });
  }

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

  function deleteProduct(id){
    setcartList(cartList.filter(prod=>prod.id !== id))
  }
 
  function cartEmpty() {
    setcartList([]);
  }

  function cantidadTotal(){

    return cartList.reduce((contador,producto)=>contador+=producto.quantity,0)

  }

  function totalPrice(){

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

        order.total= totalPrice();
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
      .then((resp) => toastify(`Orden Exitosa, codigo de compra: ${resp.id}`, 10000))
      .catch((err) => console.log(err))
      .finally(() =>{        
        cartEmpty()        
      } ); 
      }
    } 
    else {
      toastify('Revise su información', 3000);
    }
  }

  return (
    <div>  
      <ToastContainer/>   
      <CartContext.Provider value={{ cartList, añadirAlCarrito, cartEmpty, deleteProduct,cantidadTotal,totalPrice, purchaseOrder, toastify }}>
        {children}
      </CartContext.Provider>
    </div>
  );
}

export default CartContextProvider;

