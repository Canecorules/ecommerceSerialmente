import "./Item.css"
import { Card } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";

function Item({producto}) {

    function botonCarrito(count){
        alert(`${count} items agregados al carrito`)
    }
    
return (

<Card className="Card" style={{ width: '16rem' }}>
<Card.Img className="imagenCard" variant="top" src={producto.img}/>
<Card.Body className ="bodyCard">
    <Card.Title className="tituloCard">{producto.nombre}</Card.Title>
    <Card.Text className= "valorPrecio">{producto.precio}</Card.Text>
    <Link className="buttonDetail" to={`/detalle/${producto.id}`}>DETALLES</Link>
    <ItemCount stock={producto.stockDis} initial={1} onAdd={botonCarrito}/> 
</Card.Body>
</Card>
)
}

export default Item