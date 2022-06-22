/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import ItemCount from "../ItemCount/ItemCount";
import InputCount from "../InputCount/InputCount";
import "./ItemDetail.css";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";


function ItemDetail({ product,onAdd}) {
  
	const [inputType, setInputType] = useState("ItemCount")
	const {añadirAlCarrito} = useContext(CartContext)

	function handleInputType() {
	  setInputType("InputCount");
	}
	// eslint-disable-next-line no-redeclare
	function onAdd (qty) {
	  alert(`${qty} items agregados al carrito`);
	  añadirAlCarrito({...product,quantity:qty})
	  handleInputType()
	 
	}	

return (

		<div className="cardDetail">
		 <div className="cardImage"><img className="img" src={product.img}/></div>
		 <div className="details col-md-6">
						<h3 className="product-title">{product.nombre}</h3>		
						<h4 className="price">Valor: <span>{product.precio}</span></h4>						
						{inputType === "ItemCount" ? (
							<ItemCount stock={product.stock} initial={1} onAdd={onAdd} handleInputType={handleInputType} />
							) : (
							<InputCount />
							)}						
		</div>
		</div>
	
  )
}


export default ItemDetail








