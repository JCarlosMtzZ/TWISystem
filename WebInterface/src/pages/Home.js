import React from "react";
import NavBarU from "../components/NavBarU";
import "./Home.css";
import User from "../img/stickMan.png";
import bronze from "../icons/bronzeMedal.png";
import silver from "../icons/silverMedal.png";
import gold from "../icons/goldMedal.png";
import empty from "../icons/emptyMedal.png";
import money from "../icons/money.png";
import score from "../icons/scoreBoard.png";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Cookies from 'universal-cookie';

function Home () {

  const cookies = new Cookies();
  const id = cookies.get('id');
  const user = cookies.get('email');

  const [data, setData] = React.useState([{"id":"id"},{"nombre":"nombre"},{"apellido":"apellido"},{"planta":"planta"},{"email":"email"},{"contrasenia":"contrasenia"},{"id_s":"id_s"},{"p_jm":0},{"p_ji":0},{"p_jr":0},{"balance":0},{"operarios_c":0},{"total_operarios":0},{"mejoras_i":0},{"total_pts":0}])
  const [error, setError] = React.useState("")
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const url = `http://localhost:3001/supervisors/${cookies.get('email')}/${cookies.get('contrasenia')}`;
    fetch(url)
    .then((resp) => {
      return resp.json();
    })
    .then((json) => {
      setData(json);
      setError("")
    })
    .catch((err) => {
      setError(err)
      setData(null)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])


  const setMedal = () => {
    if(data[0].p_ji >= 500 && data[0].p_ji < 1000 && data[0].p_jm >= 500 && data[0].p_jm < 1000 && data[0].p_jr >= 500 && data[0].p_jr < 1000)
    {
      return bronze;
    }
    else if(data[0].p_ji < 500 || data[0].p_jm < 500 || data[0].p_jr < 500)
    {
      return  empty;
    }
    else if(data[0].p_ji >= 1000 && data[0].p_ji < 1500 && data[0].p_jm >= 1000 && data[0].p_jm < 1500 && data[0].p_jr >= 1000 && data[0].p_jr < 1500)
    {
      return silver;
    }
    else if(data[0].p_ji < 1000 || data[0].p_jm < 1000 || data[0].p_jr < 1000)
    {
      return bronze;
    }
    else if(data[0].p_ji >= 1500 && data[0].p_jm >= 1500 && data[0].p_jr >= 1500)
    {
      return gold;
    }
    else if(data[0].p_ji < 1500 || data[0].p_jm < 1500 || data[0].p_jr < 1500)
    {
      return  silver;
    }
    return empty;
  }

  function updateMedal()
  {
    let item={id, medalString}
    console.warn("item", item)
    fetch(`http://localhost:3001/supervisors/update_medal/${user}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
      body: JSON.stringify(item)
    })
    .then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
      })
    })
  }

  const medal = setMedal();

  if (medal === empty)
  {
    var medalString = 'vacío';
  }
  else if (medal === bronze)
  {
    var medalString = 'bronce';
  }
  else if (medal === silver)
  {
    var medalString = 'plata';
  }
  else if (medal === gold)
  {
    var medalString = 'oro';
  }
  else{
    var medalString = 'vacío';
  }

  updateMedal();

  return (
    <div>
      <NavBarU />
      {loading && "Cargando información"}
      {error && <div> {`Error al cargar la información ${error}`} </div>}
      <Container className="content">
        <Row>
          <Col sm={4} className="stats">
            <Row>
              <Col sm={8}>
                <Row>
                  <Col>
                    <div className="bar">
                      <h4>Job Instrucions</h4>
                      <ProgressBar animated now={100/1500*data[0].p_ji} label={`${Math.trunc(100/1500*data[0].p_ji)}%`} />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="bar">
                      <h4>Job Methods</h4>
                      <ProgressBar animated now={100/1500*data[0].p_jm} variant="success" label={`${Math.trunc(100/1500*data[0].p_jm)}%`} />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="bar">
                      <h4>Job Relations</h4>
                      <ProgressBar animated now={100/1500*data[0].p_jr} variant="warning" label={`${Math.trunc(100/1500*data[0].p_jr)}%` }/>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col sm={4} className="columnMedal">
                <img src={medal} width="95" height="100" className="d-inline-block align-top" alt="b medal" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <div className="columnMoney">
                    <img className="money" ClassName="img-fluid" className="mx-auto" src={money} />
                  </div>
                  <div className="columnMoney">
                    <h3 className="moneyAmount">{data[0].balance}</h3>
                  </div>
                </Row>
                <Row>
                  <div className="columnScore">
                    <img className="score" ClassName="img-fluid" className="mx-auto" src={score} />
                  </div>
                  <div className="columnScore">
                    <h3 className="pointsAmount">{data[0].total_pts}</h3>
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col sm={4}>
            <div className="Stick">
              <h1>{data[0].nombre}</h1>
              <img
                className="user"
                className="img-fluid"
                className="mx-auto"
                src={User}
              />
            </div>
          </Col>
          <Col sm={4} className="botones">
            <Row>
              <Button variant="dark" className="boton">
                  <NavLink to="/game" className="NavLog">
                    Jugar
                  </NavLink>
              </Button>{" "}
            </Row>
            <Row>
              <Button variant="dark" className="boton">
                <NavLink to="/contents" className="NavLog">
                  Entregables
                </NavLink>
              </Button>{" "}
            </Row>
            <Row>
              <Button variant="dark" className="boton">
                <NavLink to="/ranking" className="NavLog">
                  Ranking
                </NavLink>
              </Button>{" "}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
