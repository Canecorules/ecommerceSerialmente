import ItemCount from "../ItemCount/ItemCount"

function ItemListContainer({greeting}) {
  
  function carrito (count){
    alert(`${count} items agregados al carrito`)
  }
  
  return (
    <div>
        {greeting}
        <ItemCount stock={5} initial={1} onAdd={carrito}/>        
    </div>
  )
}
export default ItemListContainer