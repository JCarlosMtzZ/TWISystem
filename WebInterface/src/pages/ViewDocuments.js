import React from 'react';
import NavBarA from '../components/NavBarA';
import './ViewDocuments.css';
import Tables from '../components/DeliveredTables.js';
import { Row, Col, Container, Tab, Nav } from "react-bootstrap";

function ViewDocuments () {

  const [data, setData] = React.useState([])
  const [error, setError] = React.useState("")
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const url = 'http://localhost:3001/supervisors';
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
      <NavBarA />
      <h1 className="headE">Revisar entregables por supervisor</h1>
      {loading && "Cargando información"}
      {error && <div> {`Error al cargar la información ${error}`} </div>}
      <Container>
        <div className="containerTabE">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
            <Row>
              <Col sm={3} className="tabs">
                <div className="scrollable-div">
                  <Nav variant="pills" className="flex-column">
                    {data.map(({ id, nombre, apellido }) => (
                    <Nav.Item>
                      <Nav.Link eventKey={id}>{apellido} {nombre}</Nav.Link>
                    </Nav.Item>
                    ))}
                  </Nav>
                </div>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  {data.map(({ id }) => (
                    <Tab.Pane eventKey={id}>
                      <Tables id={id}/>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </Container>
    </div>
  );
};

export default ViewDocuments;