import { BsBag } from "react-icons/bs";
import "./CartWidget.css";
// eslint-disable-next-line no-unused-vars
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";


function CartWidget(){

  const {cantidadTotal } =
  useContext(CartContext);

    return(

    <li className="cart">
        <BsBag size={23} />
        {cantidadTotal() !== 0 && cantidadTotal() }
    </li>  

    )
}

export default CartWidget
