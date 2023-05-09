import React from "react";
import NavBarA from "../components/NavBarA";
import "./HomeA.css";
import User from "../img/stickMan.png";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Cookies from 'universal-cookie';

function HomeA () {

  const cookies = new Cookies();

  const printName = () => {
    if(cookies.get('id')){
      const nombre = cookies.get('nombre');
      return nombre;
    }
    else{
      const fullName = "[Administrador]";
      return fullName;
    }
  }

  const name = printName();

  return (
    <div>
      <NavBarA />
      <Container className="contentA">
        <Row>
          <Col sm={6}>
            <div className="StickA">
              <h1>{name}</h1>
              <img
                className="admin"
                className="img-fluid"
                className="mx-auto"
                src={User}
              />
            </div>
          </Col>
          <Col sm={6} className="botonesA">
            <Row>
              <Button variant="light" className="botonA">
                <NavLink to="/alterquizzes" className="NavLog">
                  <div className="navText">Modificación</div>
                </NavLink>
              </Button>{" "}
            </Row>
            <Row>
              <Button variant="light" className="botonA">
                <NavLink to="/analytics" className="NavLog">
                  <div className="navText">Dashboard</div>
                </NavLink>
              </Button>{" "}
            </Row>
            <Row>
              <Button variant="light" className="botonA">
                <NavLink to="/viewdocuments" className="NavLog">
                  <div className="navText">Entregables</div>
                </NavLink>
              </Button>{" "}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeA;
