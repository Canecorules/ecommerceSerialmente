/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import ItemCount from "../ItemCount/ItemCount";
import InputCount from "../InputCount/InputCount";
import "./ItemDetail.css";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";


function ItemDetail({ product,onAdd, stockDis}) {
  
	const [inputType, setInputType] = useState("ItemCount");
	
	
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
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
						
						<div className="preview-pic tab-content">
						  <div className="tab-pane active" id="pic-1"><img src={product.img}/></div>
						  <div className="tab-pane" id="pic-2"><img src={product.img} /></div>
						  <div className="tab-pane" id="pic-3"><img src={product.img} /></div>
						  <div className="tab-pane" id="pic-4"><img src={product.img} /></div>
						  <div className="tab-pane" id="pic-5"><img src={product.img} /></div>
						</div>
						<ul className="preview-thumbnail nav nav-tabs">
						  <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src={product.img} /></a></li>
						  <li><a data-target="#pic-2" data-toggle="tab"><img src={product.img} /></a></li>
						  <li><a data-target="#pic-3" data-toggle="tab"><img src={product.img} /></a></li>
						  <li><a data-target="#pic-4" data-toggle="tab"><img src={product.img} /></a></li>
						  <li><a data-target="#pic-5" data-toggle="tab"><img src={product.img} /></a></li>
						</ul>
						
					</div>
					<div className="details col-md-6">
						<h3 className="product-title">{product.nombre}</h3>
						<div className="rating">
							<div className="stars">
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
							</div>
						</div>						
						<h4 className="price">Precio: <span>{product.precio}</span></h4>						
						{inputType === "ItemCount" ? (
							<ItemCount stock={product.stock} initial={1} onAdd={onAdd} handleInputType={handleInputType} />
							) : (
							<InputCount />
							)}						
					</div>
				</div>
			</div>
		</div>
	
  )
}


export default ItemDetail







