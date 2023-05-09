import React from "react";
import "./RankingContent.css";
import User from "../img/stickMan.png";
import pos1 from "../img/tier1.png";
import pos2 from "../img/tier2.png";
import pos3 from "../img/tier3.png";
import { Row, Col, Table } from "react-bootstrap";

function RankingUContent() {

  const [data, setData] = React.useState([{"nombre":"pos1"},{"nombre":"pos2"},{"nombre":"pos3"}])
  const [error, setError] = React.useState("")
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const url = 'http://localhost:3001/ranking';
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

  return (
    <div>
      <h1>Ranking</h1>
      {loading && "Cargando información"}
      {error && <div> {`Error al cargar la información ${error}`} </div>}
      <Row className="avatares">
        <Col sm={4}>
          <Row>
            <h4>{data[1].nombre}</h4>
            <div className="user2">
              <img className="img-fluid" className="mx-auto" src={User} />
            </div>
          </Row>
          <Row>
            <div className="pos2">
              <img className="img-fluid" className="mx-auto" src={pos2} />
            </div>
          </Row>
        </Col>
        <Col sm={4}>
          <Row>
            <h4>{data[0].nombre}</h4>
            <div className="user1">
              <img className="img-fluid" className="mx-auto" src={User} />
            </div>
          </Row>
          <Row>
            <div className="pos1">
              <img className="img-fluid" className="mx-auto" src={pos1} />
            </div>
          </Row>
        </Col>
        <Col sm={4}>
          <Row>
            <h4>{data[2].nombre}</h4>
            <div className="user3">
              <img className="img-fluid" className="mx-auto" src={User} />
            </div>
          </Row>
          <Row>
            <div className="pos3">
              <img className="img-fluid" className="mx-auto" src={pos3} />
            </div>
          </Row>
        </Col>
      </Row>
      <Table striped bordered hover variant="dark" className="tabla">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre(s)</th>
            <th>Apellidos</th>
            <th>Planta</th>
            <th>Puntaje</th>
          </tr>
        </thead>
        {data && data.map(({ position, nombre, apellido, planta, total_pts }) => (
          <tbody>
            <tr>
              <td>{position}</td>
              <td>{nombre}</td>
              <td>{apellido}</td>
              <td>{planta}</td>
              <td>{total_pts}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default RankingUContent;
