import { useState } from "react"
import { FaPlus, FaMinus } from 'react-icons/fa';

import "./ItemCount.css"


export default function ItemCount ({stock, initial, onAdd}) {
    const [count, setCount]= useState(initial)

    function sumar() {
        if (count<stock){
        setCount(count+1)
        }
    }

    function restar() {
        if(count>1){
        setCount(count-1)
        }
    }
   

    return (
        <div className="containerContadorTodo">
            <div className="containerStockContador">
            <div className="containerStock"><h3>Stock disponible: {stock}</h3>   </div>
               
            <div className="containerContador">        
                <button className="boton" onClick={restar}> <FaMinus/></button>        
                <p className="numero">{count}</p>        
                <button className="boton" onClick={sumar}> <FaPlus/></button>        
            </div>  

            </div>
            <div className="containerBotonCarrito">        
                <button className="botonAgregarCarrito" onClick={()=>onAdd(count)}>
                     Agregar al Carrito
                </button>        
            </div>        
        </div>  
        )        
        }