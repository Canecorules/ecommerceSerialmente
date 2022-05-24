import { useState } from "react"
import { FaPlus, FaMinus } from 'react-icons/fa';
import "./ItemCount.css"


export default function ItemCount ({stock, initial, onAdd, handleInputType }) {
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
            <h3>Stock disponible: {stock}</h3>        
            <div className="containerContador">        
                <button className="boton" onClick={restar}> <FaMinus/></button>        
                <p className="numero">{count}</p>        
                <button className="boton" onClick={sumar}> <FaPlus/></button>        
            </div>        
            <div className="containerBotonCarrito">        
                <button className="cta" onClick={handleInputType}>
                    <span className="hover-underline-animation"> Añadir al Carrito </span>
                    <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                        <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                    </svg>
                    </button>        
            </div>        
        </div>  
        )        
        }