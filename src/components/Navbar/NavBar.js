// import {Container} from "react-bootstrap/Container"
// import {Navbar} from "react-bootstrap/Navbar"
// import {Button} from "react-bootstrap/Button"
import {Button, Container, Navbar} from "react-bootstrap"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

function NavBar(){
    return(
      <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Tienda Serialmente</Navbar.Brand>
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