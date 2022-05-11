import "./Item.css"
import { Card } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"

function Item({nombre,img,precio}) {

    function botonCarrito(count){
        alert(`${count} items agregados al carrito`)
    }
    
return (

<Card className="containerCard" style={{ width: '16rem' }}>
<Card.Img className="imagenCard" variant="top" src={img}/>
<Card.Body>
    <Card.Title className="tituloCard">{nombre}</Card.Title>
    <Card.Text className= "valorPrecio">{precio}</Card.Text>
    <ItemCount stock={5} initial={1} onAdd={botonCarrito}/> 
</Card.Body>
</Card>
)
}

export default Item