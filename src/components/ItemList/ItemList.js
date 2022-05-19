import Item from "../Item/Item";
import "./ItemList.css";


function ItemList({productosFetch}) {
  return (
    <div className="contenedorTodasLasCards">
     {productosFetch.map((item)=>
      (
        <div className="containerCard" key={item.id}>
          <Item producto={item}/>
          
        </div>
      
      ))}
    </div>
  );
}
export default ItemList;


  