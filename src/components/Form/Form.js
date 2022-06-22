import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

import { Button, Col, FormGroup, FormLabel, FormSelect, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./Form.css"


function Formulario() {

  const { purchaseOrder } = useContext(CartContext);

  return (
    <Form className="form">
      <Row className="inputName">
        <Col>
          <input
            className="inputName"
            id="firstName"
            placeholder="Nombre completo"
          />
        </Col>
        <Col>
          <input className="inputName" id="lastName" placeholder="Apellido" />
        </Col>
      </Row>

      <Row className="inputMail">
        <FormGroup controlId="formGridEmail">
          <FormLabel></FormLabel>
          <input
            className="inputMail"
            id="email"
            type="email"
            placeholder="Ingrese email..."
          />
        </FormGroup>

        <FormGroup controlId="formGridEmail">
          <FormLabel></FormLabel>
          <input
            className="inputMail"
            id="formEmailRepeat"
            type="email"
            placeholder="Valide su email..."
          />
        </FormGroup>
      </Row>

      <FormGroup className="input" controlId="formGridAddress">
        <FormLabel>Dirección</FormLabel>
        <input className="input" id="address" placeholder="San Juan 1234" />
      </FormGroup>

      <FormGroup className="input" controlId="cellPhone">
        <FormLabel>Celular</FormLabel>
        <input
          className="input"
          id="cellPhone"
          placeholder="ingrese su celular"
        />
      </FormGroup>

      <Row className="mb-3">
        <FormGroup as={Col} controlId="formGridCity">
          <FormLabel>Ciudad</FormLabel>
          <input id="city" />
        </FormGroup>

        <FormGroup as={Col} controlId="formGridZip">
          <FormLabel>CP</FormLabel>
          <input id="zip" />
        </FormGroup>

        <FormGroup as={Col} controlId="formGridState">
          <FormLabel>País</FormLabel>
          <FormSelect defaultValue="Colombia">
            <option>Colombia</option>
            <option>Uruguay</option>
            <option>Chile</option>
            <option>Brasil</option>
            <option>Paraguay</option>
            <option>Perú</option>
          </FormSelect>
        </FormGroup>
      </Row>

      <Button variant="primary" onClick={(e) => purchaseOrder(e)}>
        Generar Orden
      </Button>
    </Form>
  );
}

export default Formulario;