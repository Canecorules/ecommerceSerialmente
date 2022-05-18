import "./Item.css"
import { Card } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";

function Item({nombre,img,precio,stockDis, itemId}) {

    function botonCarrito(count){
        alert(`${count} items agregados al carrito`)
    }
    
return (

<Card className="Card" style={{ width: '16rem' }}>
<Card.Img className="imagenCard" variant="top" src={img}/>
<Card.Body className ="bodyCard">
    <Card.Title className="tituloCard">{nombre}</Card.Title>
    <Card.Text className= "valorPrecio">{precio}</Card.Text>
    <Link className="buttonDetail" to={`/detalle`}>DETALLES</Link>
    <ItemCount stock={stockDis} initial={1} onAdd={botonCarrito}/> 
</Card.Body>
</Card>
)
}

export default Item