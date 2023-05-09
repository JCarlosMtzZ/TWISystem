import React from 'react';
import NavBarA from '../components/NavBarA';
import ji from '../icons/ji.png';
import jm from '../icons/jm.png';
import jr from '../icons/jr.png';
import './AlterQuizzes.css'
import { Container, Row, Col, Accordion, Button, Form, Modal } from 'react-bootstrap'

function AlterQuizzes () {
    
  const [showJI1, setShowJI1] = React.useState(false);
  const handleCloseJI1 = () => setShowJI1(false);
  const handleShowJI1 = () => setShowJI1(true);

  const [showJI2, setShowJI2] = React.useState(false);
  const handleCloseJI2 = () => setShowJI2(false);
  const handleShowJI2 = () => setShowJI2(true);

  const [showJI3, setShowJI3] = React.useState(false);
  const handleCloseJI3 = () => setShowJI3(false);
  const handleShowJI3 = () => setShowJI3(true);

  const [showJM1, setShowJM1] = React.useState(false);
  const handleCloseJM1 = () => setShowJM1(false);
  const handleShowJM1 = () => setShowJM1(true);

  const [showJM2, setShowJM2] = React.useState(false);
  const handleCloseJM2 = () => setShowJM2(false);
  const handleShowJM2 = () => setShowJM2(true);

  const [showJM3, setShowJM3] = React.useState(false);
  const handleCloseJM3 = () => setShowJM3(false);
  const handleShowJM3 = () => setShowJM3(true);

  const [showJR1, setShowJR1] = React.useState(false);
  const handleCloseJR1 = () => setShowJR1(false);
  const handleShowJR1 = () => setShowJR1(true);

  const [showJR2, setShowJR2] = React.useState(false);
  const handleCloseJR2 = () => setShowJR2(false);
  const handleShowJR2 = () => setShowJR2(true);

  const [showJR3, setShowJR3] = React.useState(false);
  const handleCloseJR3 = () => setShowJR3(false);
  const handleShowJR3 = () => setShowJR3(true);

  const [pregunta, setPregunta] = React.useState('');
  const [correcta, setCorrecta] = React.useState('');
  const [incorrecta1, setIncorrecta1] = React.useState('');
  const [incorrecta2, setIncorrecta2] = React.useState('');
  const [incorrecta3, setIncorrecta3] = React.useState('');

  function updateQuiz1JI()
  {
    let item={quiz: '1', tipo: 'JI', pregunta, correcta, incorrecta1, incorrecta2, incorrecta3}
    console.warn("item", item)
    fetch(`http://localhost:3001/questions/add`, {
      method: "post",
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

  function updateQuiz2JI()
  {
    let item={quiz: '2', tipo: 'JI', pregunta, correcta, incorrecta1, incorrecta2, incorrecta3}
    console.warn("item", item)
    fetch(`http://localhost:3001/questions/add`, {
      method: "post",
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

  function updateQuiz3JI()
  {
    let item={quiz: '3', tipo: 'JI', pregunta, correcta, incorrecta1, incorrecta2, incorrecta3}
    console.warn("item", item)
    fetch(`http://localhost:3001/questions/add`, {
      method: "post",
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

  function updateQuiz1JM()
  {
    let item={quiz: '1', tipo: 'JM', pregunta, correcta, incorrecta1, incorrecta2, incorrecta3}
    console.warn("item", item)
    fetch(`http://localhost:3001/questions/add`, {
      method: "post",
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

  function updateQuiz2JM()
  {
    let item={quiz: '2', tipo: 'JM', pregunta, correcta, incorrecta1, incorrecta2, incorrecta3}
    console.warn("item", item)
    fetch(`http://localhost:3001/questions/add`, {
      method: "post",
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

  function updateQuiz3JM()
  {
    let item={quiz: '3', tipo: 'JM', pregunta, correcta, incorrecta1, incorrecta2, incorrecta3}
    console.warn("item", item)
    fetch(`http://localhost:3001/questions/add`, {
      method: "post",
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

  function updateQuiz1JR()
  {
    let item={quiz: '1', tipo: 'JR', pregunta, correcta, incorrecta1, incorrecta2, incorrecta3}
    console.warn("item", item)
    fetch(`http://localhost:3001/questions/add`, {
      method: "post",
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

  function updateQuiz2JR()
  {
    let item={quiz: '2', tipo: 'JR', pregunta, correcta, incorrecta1, incorrecta2, incorrecta3}
    console.warn("item", item)
    fetch(`http://localhost:3001/questions/add`, {
      method: "post",
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

  function updateQuiz3JR()
  {
    let item={quiz: '3', tipo: 'JR', pregunta, correcta, incorrecta1, incorrecta2, incorrecta3}
    console.warn("item", item)
    fetch(`http://localhost:3001/questions/add`, {
      method: "post",
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

  return (
    <div>
      <NavBarA />
      <h1 className="headA">Modificar Quizzes</h1>
      <Container className="content">
        <Row>
          <Col sm={4}>
            <div  className="columnaA">
              <img src={ji} width="100" height="100" className="d-inline-block align-top" alt="ji logo" />
              <h2 className="colElementA">Job Instructions</h2>
              <Accordion defaultActiveKey={['0']} alwaysOpen className="colElementA">
                <Accordion.Item eventKey="0" className="itemA">
                  <Accordion.Header>Agregar preguntas por Quiz</Accordion.Header>
                  <Accordion.Body>
                    <Button onClick={handleShowJI1} variant="dark" className="botonCursosA">Quiz 1</Button>
                    <Button onClick={handleShowJI2} variant="dark" className="botonCursosA">Quiz 2</Button>
                    <Button onClick={handleShowJI3} variant="dark" className="botonCursosA">Quiz 3</Button>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
          <Col sm={4}>
            <div  className="columnaA">
              <img src={jm} width="100" height="100" className="d-inline-block align-top" alt="jm logo" />
              <h2 className="colElementA">Job Methods</h2>
              <Accordion defaultActiveKey={['0']} alwaysOpen className="colElementA">
                <Accordion.Item eventKey="0" className="itemA">
                  <Accordion.Header>Agregar preguntas por Quiz</Accordion.Header>
                  <Accordion.Body>
                    <Button onClick={handleShowJM1} variant="dark" className="botonCursosA"> Quiz 1  </Button>
                    <Button onClick={handleShowJM2} variant="dark" className="botonCursosA"> Quiz 2  </Button>
                    <Button onClick={handleShowJM3} variant="dark" className="botonCursosA"> Quiz 3  </Button>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
          <Col sm={4}>
            <div  className="columnaA">
              <img src={jr} width="100" height="100" className="d-inline-block align-top" alt="jr logo" />
              <h2 className="colElementA">Job Relations</h2>
              <Accordion defaultActiveKey={['0']} alwaysOpen className="colElementA"> 
                <Accordion.Item eventKey="0" className="itemA">
                  <Accordion.Header>Agregar preguntas por Quiz</Accordion.Header>
                  <Accordion.Body>
                      <Button onClick={handleShowJR1} variant="dark" className="botonCursos"> Quiz 1  </Button>
                      <Button onClick={handleShowJR2} variant="dark" className="botonCursos"> Quiz 2  </Button>
                      <Button onClick={handleShowJR3} variant="dark" className="botonCursos"> Quiz 3  </Button>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>

          <Modal
            show={showJI1}
            onHide={handleCloseJI1}
            backdrop="static"
            keyboard={false}
            size="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Agregar pregunta al Quiz 1 de Job Instructions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Pregunta</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir pregunta"
                    value={pregunta}
                    onChange={(e) => {setPregunta(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción correcta</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción correcta"
                    value={correcta}
                    onChange={(e) => {setCorrecta(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 1</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción incorrecta 1"
                    value={incorrecta1}
                    onChange={(e) => {setIncorrecta1(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 2</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción incorrecta 1"
                    value={incorrecta2}
                    onChange={(e) => {setIncorrecta2(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 3</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Opción incorrecta 3"
                    value={incorrecta3}
                    onChange={(e) => {setIncorrecta3(e.target.value)}} />
                </Form.Group>
                <Button variant="primary" onClick={updateQuiz1JI}>
                  Subir pregunta
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
          <Modal
            show={showJI2}
            onHide={handleCloseJI2}
            backdrop="static"
            keyboard={false}
            size="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Agregar pregunta al Quiz 2 de Job Instructions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Pregunta</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir pregunta"
                    value={pregunta}
                    onChange={(e) => {setPregunta(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción correcta</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción correcta"
                    value={correcta}
                    onChange={(e) => {setCorrecta(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 1</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción incorrecta 1"
                    value={incorrecta1}
                    onChange={(e) => {setIncorrecta1(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 2</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción incorrecta 1"
                    value={incorrecta2}
                    onChange={(e) => {setIncorrecta2(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 3</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Opción incorrecta 3"
                    value={incorrecta3}
                    onChange={(e) => {setIncorrecta3(e.target.value)}} />
                </Form.Group>
                <Button variant="primary" onClick={updateQuiz2JI}>
                  Subir pregunta
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
          <Modal
            show={showJI3}
            onHide={handleCloseJI3}
            backdrop="static"
            keyboard={false}
            size="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Agregar pregunta al Quiz 3 de Job Instructions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Pregunta</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir pregunta"
                    value={pregunta}
                    onChange={(e) => {setPregunta(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción correcta</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción correcta"
                    value={correcta}
                    onChange={(e) => {setCorrecta(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 1</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción incorrecta 1"
                    value={incorrecta1}
                    onChange={(e) => {setIncorrecta1(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 2</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción incorrecta 1"
                    value={incorrecta2}
                    onChange={(e) => {setIncorrecta2(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 3</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Opción incorrecta 3"
                    value={incorrecta3}
                    onChange={(e) => {setIncorrecta3(e.target.value)}} />
                </Form.Group>
                <Button variant="primary" onClick={updateQuiz3JI}>
                  Subir pregunta
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
          <Modal
            show={showJM1}
            onHide={handleCloseJM1}
            backdrop="static"
            keyboard={false}
            size="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Agregar pregunta al Quiz 1 de Job Methods</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Pregunta</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir pregunta"
                    value={pregunta}
                    onChange={(e) => {setPregunta(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción correcta</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción correcta"
                    value={correcta}
                    onChange={(e) => {setCorrecta(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 1</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción incorrecta 1"
                    value={incorrecta1}
                    onChange={(e) => {setIncorrecta1(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 2</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción incorrecta 1"
                    value={incorrecta2}
                    onChange={(e) => {setIncorrecta2(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 3</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Opción incorrecta 3"
                    value={incorrecta3}
                    onChange={(e) => {setIncorrecta3(e.target.value)}} />
                </Form.Group>
                <Button variant="primary" onClick={updateQuiz1JM}>
                  Subir pregunta
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
          <Modal
            show={showJM2}
            onHide={handleCloseJM2}
            backdrop="static"
            keyboard={false}
            size="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Agregar pregunta al Quiz 2 de Job Methods</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Pregunta</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir pregunta"
                    value={pregunta}
                    onChange={(e) => {setPregunta(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción correcta</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción correcta"
                    value={correcta}
                    onChange={(e) => {setCorrecta(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 1</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción incorrecta 1"
                    value={incorrecta1}
                    onChange={(e) => {setIncorrecta1(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 2</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción incorrecta 1"
                    value={incorrecta2}
                    onChange={(e) => {setIncorrecta2(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 3</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Opción incorrecta 3"
                    value={incorrecta3}
                    onChange={(e) => {setIncorrecta3(e.target.value)}} />
                </Form.Group>
                <Button variant="primary" onClick={updateQuiz2JM}>
                  Subir pregunta
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
          <Modal
            show={showJM3}
            onHide={handleCloseJM3}
            backdrop="static"
            keyboard={false}
            size="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Agregar pregunta al Quiz 3 de Job Methods</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Pregunta</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir pregunta"
                    value={pregunta}
                    onChange={(e) => {setPregunta(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción correcta</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción correcta"
                    value={correcta}
                    onChange={(e) => {setCorrecta(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 1</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción incorrecta 1"
                    value={incorrecta1}
                    onChange={(e) => {setIncorrecta1(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 2</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción incorrecta 1"
                    value={incorrecta2}
                    onChange={(e) => {setIncorrecta2(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 3</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Opción incorrecta 3"
                    value={incorrecta3}
                    onChange={(e) => {setIncorrecta3(e.target.value)}} />
                </Form.Group>
                <Button variant="primary" onClick={updateQuiz3JM}>
                  Subir pregunta
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
          <Modal
            show={showJR1}
            onHide={handleCloseJR1}
            backdrop="static"
            keyboard={false}
            size="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Agregar pregunta al Quiz 1 de Job Relations</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Pregunta</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir pregunta"
                    value={pregunta}
                    onChange={(e) => {setPregunta(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción correcta</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción correcta"
                    value={correcta}
                    onChange={(e) => {setCorrecta(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 1</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción incorrecta 1"
                    value={incorrecta1}
                    onChange={(e) => {setIncorrecta1(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 2</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción incorrecta 1"
                    value={incorrecta2}
                    onChange={(e) => {setIncorrecta2(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 3</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Opción incorrecta 3"
                    value={incorrecta3}
                    onChange={(e) => {setIncorrecta3(e.target.value)}} />
                </Form.Group>
                <Button variant="primary" onClick={updateQuiz1JR}>
                  Subir pregunta
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
          <Modal
            show={showJR2}
            onHide={handleCloseJR2}
            backdrop="static"
            keyboard={false}
            size="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Agregar pregunta al Quiz 2 de Job Relations</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Pregunta</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir pregunta"
                    value={pregunta}
                    onChange={(e) => {setPregunta(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción correcta</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción correcta"
                    value={correcta}
                    onChange={(e) => {setCorrecta(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 1</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción incorrecta 1"
                    value={incorrecta1}
                    onChange={(e) => {setIncorrecta1(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 2</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción incorrecta 1"
                    value={incorrecta2}
                    onChange={(e) => {setIncorrecta2(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 3</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Opción incorrecta 3"
                    value={incorrecta3}
                    onChange={(e) => {setIncorrecta3(e.target.value)}} />
                </Form.Group>
                <Button variant="primary" onClick={updateQuiz2JR}>
                  Subir pregunta
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
          <Modal
            show={showJR3}
            onHide={handleCloseJR3}
            backdrop="static"
            keyboard={false}
            size="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Agregar pregunta al Quiz 3 de Job Relations</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Pregunta</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir pregunta"
                    value={pregunta}
                    onChange={(e) => {setPregunta(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción correcta</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción correcta"
                    value={correcta}
                    onChange={(e) => {setCorrecta(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 1</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción incorrecta 1"
                    value={incorrecta1}
                    onChange={(e) => {setIncorrecta1(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 2</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribir opción incorrecta 1"
                    value={incorrecta2}
                    onChange={(e) => {setIncorrecta2(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Opción incorrecta 3</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Opción incorrecta 3"
                    value={incorrecta3}
                    onChange={(e) => {setIncorrecta3(e.target.value)}} />
                </Form.Group>
                <Button variant="primary" onClick={updateQuiz3JR}>
                  Subir pregunta
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </Row>
      </Container>
    </div>
  );
};

export default AlterQuizzes;