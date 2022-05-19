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
  <Link to={`/tienda/Libros`}><Button variant="warning">Libros</Button>{' '}</Link>
  <Link to={`/tienda/Historietas`}><Button variant="warning">Historietas</Button>{' '}</Link>
  <Link to={`/tienda/Articulos`}><Button variant="warning">Artículos</Button>{' '}</Link>    
  </Navbar.Collapse>
  <CartWidget/>
  </Container>
  
</Navbar>
    )
}

export default NavBar