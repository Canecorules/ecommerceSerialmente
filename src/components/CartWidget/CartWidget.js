import {CgShoppingBag} from "react-icons/cg";
// eslint-disable-next-line no-unused-vars
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";

import "./CartWidget.css";

function CartWidget(){

  const {cantidadTotal } = useContext(CartContext);
    return(
    <li className="cart">
        <CgShoppingBag size={30} />
        {cantidadTotal() !== 0 && cantidadTotal() }
    </li>  
    )
}

export default CartWidget
