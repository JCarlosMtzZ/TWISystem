import React from 'react';
import TWIRed from '../logos/twiRed.png';
import UserIcon from '../icons/userIconGray.png';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';

function NavBarU () {

  const cookies = new Cookies();

  const printName = () => {
    if(cookies.get('id')){
      const nombre = cookies.get('nombre');
      return nombre;
    }
    else{
      const fullName = "Supervisor";
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
    cookies.remove('p_jm', {path: '/'});
    cookies.remove('p_ji', {path: '/'});
    cookies.remove('p_jr', {path: '/'});
    cookies.remove('balance', {path: '/'});
    cookies.remove('id', {path: '/'});
    cookies.remove('operarios_c', {path: '/'});
    cookies.remove('total_operarios', {path: '/'});
    cookies.remove('mejoras_i', {path: '/'});
    cookies.remove('total_pts', {path: '/'});
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
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={"/home"} className="logotwi">
            <img src={TWIRed} width="120" height="45" className="d-inline-block align-top" alt="TWIRed logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="togglebutton" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/game"}>Juego</Nav.Link>
              <Nav.Link as={Link} to={"/ranking"}>Ranking</Nav.Link>
              <Nav.Link as={Link} to={"/contents"}>Documentos</Nav.Link>
              {/*<Nav.Link as={Link} to={"/abouttwi"}>Sobre TWI</Nav.Link>*/}
            </Nav>
            <Nav className="ms-auto">
              <div>
                <img src={UserIcon} width="45" height="45" className="d-inline-block align-top" alt="UserGray logo" />
              </div>
              <NavDropdown title={name} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => cerrarSesion()}>Cerrar Sesión</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarU;