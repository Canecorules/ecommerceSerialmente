import { Link } from "react-router-dom";
import { Card } from "react-bootstrap"

import "./Item.css"

function Item({producto}) {
    
return (

<Card className="Card" style={{ width: '16rem' }}>
<Card.Img className="imagenCard" variant="top" src={producto.img}/>
<Card.Body className ="bodyCard">
    <Card.Title className="tituloCard">{producto.nombre}</Card.Title>
    <Card.Text className= "valorPrecio text-center">Valor: {producto.precio}</Card.Text>
    <Link className="buttonDetail" to={`/detalle/${producto.id}`}>VER MÁS</Link>    
</Card.Body>
</Card>
)
}

export default Item