import Container from "react-bootstrap/Container" 
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import CartWidget from "../CartWidget/CartWidget"

import "./NavBar.css"
import { Link } from "react-router-dom"
// eslint-disable-next-line no-unused-vars
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";

import 'animate.css';


function NavBar(){
  // eslint-disable-next-line no-unused-vars
  const {cantidadTotal } =
  useContext(CartContext);

    return(
  <Navbar className="containerNav" collapseOnSelect expand="lg" >
  <Container>
  <Link to="/"><Navbar.Brand className="logo animate__animated animate__flash animate__slow animate__delay-2s animate__repeat-3">SERIALMENTE</Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">    
  <Link  to={`/tienda/Libros`}><Button >LIBROS</Button></Link>
  <Link to={`/tienda/Historietas`}><Button >HISTORIETAS</Button></Link>
  <Link  to={`/tienda/Articulos`}><Button >ARTÍCULOS</Button></Link>    
  </Navbar.Collapse>
  <Link to={`/carrito`}>
  <CartWidget/>
  </Link> 
  </Container>
  
</Navbar>
    )
}

export default NavBar