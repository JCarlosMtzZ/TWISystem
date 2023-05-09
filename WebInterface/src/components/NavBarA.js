import React from "react";
import TWIBlack from "../logos/twiBlack.png";
import UserIcon from "../icons/userIconBlack.png";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';

function NavBarA () {

  const cookies = new Cookies();

  const printName = () => {
    if(cookies.get('id')){
      const nombre = cookies.get('nombre');
      return nombre;
    }
    else{
      const fullName = "Administrador";
      return fullName;
    }
  }

  const cerrarSesion = () => {
    cookies.remove('id', {path: '/'});
    cookies.remove('nombre', {path: '/'});
    cookies.remove('apellido', {path: '/'});
    cookies.remove('planta', {path: '/'});
    cookies.remove('email', {path: '/'});
    cookies.remove('contrasenia', {path: '/'});
    window.location.href='./';
  }

  const componentDidMount = () => {
    if(!cookies.get('id'))
    {
      window.location.href='./'
    }
  }

  const name = printName();
  
  return (
    <div>
      {componentDidMount()}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={"/homea"}>
            <img
              src={TWIBlack}
              width="120"
              height="45"
              className="d-inline-block align-top"
              alt="TWIRed logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/rankinga"}>Ranking</Nav.Link>
              <Nav.Link as={Link} to={"/analytics"}>Dashboard</Nav.Link>
              <Nav.Link as={Link} to={"/viewdocuments"}>Entregables</Nav.Link>
              <Nav.Link as={Link} to={"/alterquizzes"}>Modificación</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <div>
                <img
                  src={UserIcon}
                  width="45"
                  height="45"
                  className="d-inline-block align-top"
                  alt="UserBlack logo"
                />
              </div>
              <NavDropdown title={name} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => cerrarSesion()}>
                  Cerrar Sesión
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarA;
