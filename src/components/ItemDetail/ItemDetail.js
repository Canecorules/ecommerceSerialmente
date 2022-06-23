/* eslint-disable no-redeclare */
/* eslint-disable jsx-a11y/alt-text */
import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import InputCount from "../InputCount/InputCount";
import { CartContext } from "../../Context/CartContext";

import { ToastContainer } from "react-toastify";
import "./ItemDetail.css";

function ItemDetail({ product,onAdd}) {

	const [inputType, setInputType] = useState("ItemCount")
	const {añadirAlCarrito, toastify} = useContext(CartContext)

	function handleInputType() {
		setInputType("InputCount");
	}	

	function onAdd (qty) {
		toastify(`${qty} items agregados al carrito`, 3000);
	  	añadirAlCarrito({...product,quantity:qty})
	 	handleInputType()	 
	}	

return (

		<div className="cardDetail">
			<ToastContainer/>
		 	<div className="cardImage"><img className="img" src={product.img}/></div>
				 <div className="details col-md-6">
					<h3 className="product-title">{product.nombre}</h3>		
					<h4 className="price">Valor: <span>{product.precio}</span></h4>						
					{inputType === "ItemCount" ? (
						<ItemCount stock={product.stock} initial={1} onAdd={onAdd} handleInputType={handleInputType} />
						) : (
						<InputCount />
						)}
				<div/>									
			</div>
		</div>
	
  )
}


export default ItemDetail








