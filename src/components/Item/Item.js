import "./Item.css"
import { Card } from "react-bootstrap"
// import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";

function Item({producto}) {
    
return (

<Card className="Card" style={{ width: '16rem' }}>
<Card.Img className="imagenCard" variant="top" src={producto.img}/>
<Card.Body className ="bodyCard">
    <Card.Title className="tituloCard">{producto.nombre}</Card.Title>
    <Card.Text className= "valorPrecio">{producto.precio}</Card.Text>
    <Link className="buttonDetail" to={`/detalle/${producto.id}`}>DETALLES</Link>    
</Card.Body>
</Card>
)
}

export default Item