import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link } from "react-router-dom"

function NavBar(){
    return(
      <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
  <Container>
   <Link to="/"><Navbar.Brand>Tienda Serialmente</Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">    
    <Button variant="warning">Libros</Button>{' '}
    <Button variant="warning">Historietas</Button>{' '}
    <Button variant="warning">Artículos</Button>{' '}    
  </Navbar.Collapse>
  <CartWidget/>
  </Container>
  
</Navbar>
    )
}

export default NavBar