import React from 'react';
import './DeliveredTables.css';
import { Row, Col, Table, Accordion, Button, Form } from "react-bootstrap";
import ji from '../icons/ji.png';
import jm from '../icons/jm.png';
import jr from '../icons/jr.png';
import Cookies from 'universal-cookie';

function DeliveredTables ({id}) {

  const url = "localhost:3001";

  const cookies = new Cookies();

  const [grade, setGrade] = React.useState('')
  const [dataJI, setDataJI] = React.useState([{'id': 'id'}])
  const [dataJM, setDataJM] = React.useState([{'id': 'id'}])
  const [dataJR, setDataJR] = React.useState([{'id': 'id'}])
  const [error, setError] = React.useState("")
  const [loading, setLoading] = React.useState(true)
  
  React.useEffect(() => {
    const url = `http://localhost:3001/entregables/${id}/JI`;
    fetch(url)
    .then((resp) => {
      return resp.json();
    })
   .then((json) => {
      setDataJI(json);
      setError("")
    })
    .catch((err) => {
      setError(err)
      setDataJI(null)
    })
    .finally(() => {
      setLoading(false)
    }) 
  }, [])

  React.useEffect(() => {
    const url = `http://localhost:3001/entregables/${id}/JM`;
    fetch(url)
    .then((resp) => {
      return resp.json();
    })
   .then((json) => {
      setDataJM(json);
      setError("")
    })
    .catch((err) => {
      setError(err)
      setDataJM(null)
    })
    .finally(() => {
      setLoading(false)
    }) 
  }, [])

  React.useEffect(() => {
    const url = `http://localhost:3001/entregables/${id}/JR`;
    fetch(url)
    .then((resp) => {
      return resp.json();
    })
   .then((json) => {
      setDataJR(json);
      setError("")
    })
    .catch((err) => {
      setError(err)
      setDataJR(null)
    })
    .finally(() => {
      setLoading(false)
    }) 
  }, [])
      
  function gradeDocument(id_entregable, id_s, tipo)
  {
    let pts = 0;
    let balance = 0;

    if (tipo === 'JI')
    {
      tipo = 'p_ji';
    }
    else if(tipo === 'JM'){
      tipo = 'p_jm';
    }
    else{
      tipo = 'p_jr';
    }

    if (grade >= 70)
    {
      pts = 500;
      balance = 500;
    }
    else{
      pts = 0;
      balance = 0;
    }

    let item0 = {id_s, tipo, pts, balance}
    fetch(`http://localhost:3001/supervisors/updatePts/${id_s}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
      body: JSON.stringify(item0)
    })
    .then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
      })
    }) 

    let item={id_entregable, grade, id_a: cookies.get('id')}
    console.warn("item", item)
    fetch(`http://localhost:3001/entregables/grade`, {
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
      window.location.reload();
    })  
  }

  function isGraded(calificacion)
  {
    if(calificacion >= 70){
      return true;
    }
    else{
      return false;
    }
  }

  return (
    <div>
      {loading && "Cargando información"}
      {error && <div> {`Error al cargar la información ${error}`} </div>}
      <Row className="fila">
        <Col sm={2}>
          <img src={ji} width="100" height="100" className="d-inline-block align-top" alt="ji logo" />
        </Col>
        <Col sm={10}>
          <Accordion className="acordeon">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Revisar entregables sobre Job Instructions</Accordion.Header>
              <Accordion.Body>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Entregable</th>
                      <th>Enlace</th>
                      <th>Calificación</th>
                      <th>Calificar/Reasignar</th>
                    </tr>
                  </thead>
                  {dataJI.map(({ id_entregable, no_entregable, enlace, calificacion, id_s, tipo }) => (
                  <tbody>
                    <tr>
                      <td>{no_entregable}</td>
                      <td><a href={url.concat(enlace)}>Ver</a></td>
                      <td>{calificacion}</td>
                      <td>
                        {isGraded(calificacion) ? (
                          <Button variant="dark" className="botonEntregables2">Calificado</Button>
                        ) : (
                        <Form>
                          <div className="input">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                              type="text"
                              placeholder="Escribir calificación"
                              value={grade}
                              onChange={(e) => {setGrade(e.target.value)}} />
                            </Form.Group>
                          </div>
                          <Button onClick={() => gradeDocument(id_entregable, id_s, tipo)} variant="dark" className="botonEntregables">Calificar</Button>
                        </Form>
                        )}
                      </td>
                    </tr>
                  </tbody>
                  ))}
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
      <Row className="fila">
        <Col sm={2}>
          <img src={jm} width="100" height="100" className="d-inline-block align-top" alt="jm logo" />
        </Col>
        <Col sm={10}>
          <Accordion className="acordeon">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Revisar entregables sobre Job Methods</Accordion.Header>
              <Accordion.Body>
                <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                      <th>Entregable</th>
                      <th>Enlace</th>
                      <th>Calificación</th>
                      <th>Calificar/Reasignar</th>
                    </tr>
                  </thead>
                  {dataJM.map(({ id_entregable, no_entregable, enlace, calificacion, id_s, tipo }) => (
                  <tbody>
                    <tr>
                      <td>{no_entregable}</td>
                      <td><a href={url.concat(enlace)}>Ver</a></td>
                      <td>{calificacion}</td>
                      <td>
                        {isGraded(calificacion) ? (
                          <Button variant="dark" className="botonEntregables2">Calificado</Button>
                        ) : (
                        <Form>
                          <div className="input">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                              type="text"
                              placeholder="Escribir calificación"
                              value={grade}
                              onChange={(e) => {setGrade(e.target.value)}} />
                            </Form.Group>
                          </div>
                          <Button onClick={() => gradeDocument(id_entregable, id_s, tipo)} variant="dark" className="botonEntregables">Calificar</Button>
                        </Form>
                        )}
                      </td>
                    </tr>
                  </tbody>
                  ))}
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
      <Row className="fila">
        <Col sm={2}>
          <img src={jr} width="100" height="100" className="d-inline-block align-top" alt="jr logo" />
        </Col>
        <Col sm={10}>
          <Accordion className="acordeon">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Revisar entregables sobre Job Relations</Accordion.Header>
              <Accordion.Body>
                <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                      <th>Entregable</th>
                      <th>Enlace</th>
                      <th>Calificación</th>
                      <th>Calificar/Reasignar</th>
                    </tr>
                  </thead>
                  {dataJR.map(({ id_entregable, no_entregable, enlace, calificacion, id_s, tipo }) => (
                  <tbody>
                    <tr>
                      <td>{no_entregable}</td>
                      <td><a href={url.concat(enlace)}>Ver</a></td>
                      <td>{calificacion}</td>
                      <td>
                        {isGraded(calificacion) ? (
                          <Button variant="dark" className="botonEntregables2">Calificado</Button>
                        ) : (
                        <Form>
                          <div className="input">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                              type="text"
                              placeholder="Escribir calificación"
                              value={grade}
                              onChange={(e) => {setGrade(e.target.value)}} />
                            </Form.Group>
                          </div>
                          <Button onClick={() => gradeDocument(id_entregable, id_s, tipo)} variant="dark" className="botonEntregables">Calificar</Button>
                        </Form>
                        )}
                      </td>
                    </tr>
                  </tbody>
                  ))}
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </div>
  );
};

export default DeliveredTables;