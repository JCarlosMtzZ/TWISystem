import React from 'react';
import NavBarU from '../components/NavBarU';
import ji from '../icons/ji.png';
import jm from '../icons/jm.png';
import jr from '../icons/jr.png';
import './Contents.css'
import { Container, Row, Col, Accordion, Button, Form, Modal, Table } from 'react-bootstrap'
import Cookies from 'universal-cookie';
import axios from 'axios';

function Contents () {

  const cookies = new Cookies();

  const id = cookies.get('id');
  const user = cookies.get('email');
  const pwd = cookies.get('contrasenia');

  const [selectedFile, setSelectedFile] = React.useState();
  const [isFilePicked, setIsFilePicked] = React.useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const [grade1JI, setGrade1JI] = React.useState('');
  const [grade2JI, setGrade2JI] = React.useState('');
  const [grade3JI, setGrade3JI] = React.useState('');
  const [grade1JM, setGrade1JM] = React.useState('');
  const [grade2JM, setGrade2JM] = React.useState('');
  const [grade3JM, setGrade3JM] = React.useState('');
  const [grade1JR, setGrade1JR] = React.useState('');
  const [grade2JR, setGrade2JR] = React.useState('');
  const [grade3JR, setGrade3JR] = React.useState('');

  function getGrade1JI()
  {
    axios.get(`http://localhost:3001/entregables/${id}/JI/1`)
    .then(response => {
      return response.data;
    })
    .then(response => {
      if(response.length >= 1)
      {
        var rsp = response[0];
        let cal = rsp.calificacion;
        setGrade1JI(cal)
      }
      else{
        setGrade1JI('NA')
      }  
    })
    .catch(error => {
      console.log(error);
    }) 
  };
  function getGrade2JI()
  {
    axios.get(`http://localhost:3001/entregables/${id}/JI/2`)
    .then(response => {
      return response.data;
    })
    .then(response => {
      if(response.length >= 1)
      {
        var rsp = response[0];
        let cal = rsp.calificacion;
        setGrade2JI(cal)
      }
      else{
        setGrade2JI('NA')
      }  
    })
    .catch(error => {
      console.log(error);
    }) 
  };
  function getGrade3JI()
  {
    axios.get(`http://localhost:3001/entregables/${id}/JI/3`)
    .then(response => {
      return response.data;
    })
    .then(response => {
      if(response.length >= 1)
      {
        var rsp = response[0];
        let cal = rsp.calificacion;
        setGrade3JI(cal)
      }
      else{
        setGrade3JI('NA')
      }  
    })
    .catch(error => {
      console.log(error);
    }) 
  };
  function getGrade1JM()
  {
    axios.get(`http://localhost:3001/entregables/${id}/JM/1`)
    .then(response => {
      return response.data;
    })
    .then(response => {
      if(response.length >= 1)
      {
        var rsp = response[0];
        let cal = rsp.calificacion;
        setGrade1JM(cal)
      }
      else{
        setGrade1JM('NA')
      }  
    })
    .catch(error => {
      console.log(error);
    }) 
  };
  function getGrade2JM()
  {
    axios.get(`http://localhost:3001/entregables/${id}/JM/2`)
    .then(response => {
      return response.data;
    })
    .then(response => {
      if(response.length >= 1)
      {
        var rsp = response[0];
        let cal = rsp.calificacion;
        setGrade2JM(cal)
      }
      else{
        setGrade2JM('NA')
      }  
    })
    .catch(error => {
      console.log(error);
    }) 
  };
  function getGrade3JM()
  {
    axios.get(`http://localhost:3001/entregables/${id}/JM/3`)
    .then(response => {
      return response.data;
    })
    .then(response => {
      if(response.length >= 1)
      {
        var rsp = response[0];
        let cal = rsp.calificacion;
        setGrade3JM(cal)
      }
      else{
        setGrade3JM('NA')
      }  
    })
    .catch(error => {
      console.log(error);
    }) 
  };
  function getGrade1JR()
  {
    axios.get(`http://localhost:3001/entregables/${id}/JR/1`)
    .then(response => {
      return response.data;
    })
    .then(response => {
      if(response.length >= 1)
      {
        var rsp = response[0];
        let cal = rsp.calificacion;
        setGrade1JR(cal)
      }
      else{
        setGrade1JR('NA')
      }  
    })
    .catch(error => {
      console.log(error);
    }) 
  };
  function getGrade2JR()
  {
    axios.get(`http://localhost:3001/entregables/${id}/JR/2`)
    .then(response => {
      return response.data;
    })
    .then(response => {
      if(response.length >= 1)
      {
        var rsp = response[0];
        let cal = rsp.calificacion;
        setGrade2JR(cal)
      }
      else{
        setGrade2JR('NA')
      }  
    })
    .catch(error => {
      console.log(error);
    }) 
  };
  function getGrade3JR()
  {
    axios.get(`http://localhost:3001/entregables/${id}/JR/3`)
    .then(response => {
      return response.data;
    })
    .then(response => {
      if(response.length >= 1)
      {
        var rsp = response[0];
        let cal = rsp.calificacion;
        setGrade3JR(cal)
      }
      else{
        setGrade3JR('NA')
      }  
    })
    .catch(error => {
      console.log(error);
    }) 
  };

  getGrade1JI();
  getGrade2JI();
  getGrade3JI();
  getGrade1JM();
  getGrade2JM();
  getGrade3JM();
  getGrade1JR();
  getGrade2JR();
  getGrade3JR();

  function upload1JI()
  {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("id", id);
    formData.append("tipo", 'JI');
    formData.append("numero", 1);

    axios.get(`http://localhost:3001/entregables/${id}/JI/1`)
    .then(response => {
      return response.data;
    })
    .then(response => {
      if(response.length >= 1)
      {
        fetch("http://localhost:3001/entregables/addAgain", {
          method: "POST",
          body: formData,
        })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
      else{
        fetch("http://localhost:3001/entregables/add", {
          method: "POST",
          body: formData,
        })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
    })
    .catch(error => {
      console.log(error);
    }) 
  };
  function upload2JI()
  {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("id", id);
    formData.append("tipo", 'JI');
    formData.append("numero", 2);

    axios.get(`http://localhost:3001/entregables/${id}/JI/2`)
    .then(response => {
      return response.data;
    })
    .then(response => {
      if(response.length >= 1)
      {
        fetch("http://localhost:3001/entregables/addAgain", {
          method: "POST",
          body: formData,
        })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
      else{
        fetch("http://localhost:3001/entregables/add", {
          method: "POST",
          body: formData,
        })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
    })
    .catch(error => {
      console.log(error);
    }) 
  };
  function upload3JI()
  {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("id", id);
    formData.append("tipo", 'JI');
    formData.append("numero", 3);

    axios.get(`http://localhost:3001/entregables/${id}/JI/3`)
    .then(response => {
      return response.data;
    })
    .then(response => {
      if(response.length >= 1)
      {
        fetch("http://localhost:3001/entregables/addAgain", {
          method: "POST",
          body: formData,
        })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
      else{
        fetch("http://localhost:3001/entregables/add", {
          method: "POST",
          body: formData,
        })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
    })
    .catch(error => {
      console.log(error);
    }) 
  };
  function upload1JM()
  {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("id", id);
    formData.append("tipo", 'JM');
    formData.append("numero", 1);

    axios.get(`http://localhost:3001/entregables/${id}/JM/1`)
    .then(response => {
      return response.data;
    })
    .then(response => {
      if(response.length >= 1)
      {
        fetch("http://localhost:3001/entregables/addAgain", {
          method: "POST",
          body: formData,
        })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
      else{
        fetch("http://localhost:3001/entregables/add", {
          method: "POST",
          body: formData,
        })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
    })
    .catch(error => {
      console.log(error);
    }) 
  };
  function upload2JM()
  {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("id", id);
    formData.append("tipo", 'JM');
    formData.append("numero", 2);

    axios.get(`http://localhost:3001/entregables/${id}/JM/2`)
    .then(response => {
      return response.data;
    })
    .then(response => {
      if(response.length >= 1)
      {
        fetch("http://localhost:3001/entregables/addAgain", {
          method: "POST",
          body: formData,
        })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
      else{
        fetch("http://localhost:3001/entregables/add", {
          method: "POST",
          body: formData,
        })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
    })
    .catch(error => {
      console.log(error);
    }) 
  };
  function upload3JM()
  {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("id", id);
    formData.append("tipo", 'JM');
    formData.append("numero", 3);

    axios.get(`http://localhost:3001/entregables/${id}/JM/3`)
    .then(response => {
      return response.data;
    })
    .then(response => {
      if(response.length >= 1)
      {
        fetch("http://localhost:3001/entregables/addAgain", {
          method: "POST",
          body: formData,
        })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
      else{
        fetch("http://localhost:3001/entregables/add", {
          method: "POST",
          body: formData,
        })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
    })
    .catch(error => {
      console.log(error);
    }) 
  };
  function upload1JR()
  {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("id", id);
    formData.append("tipo", 'JR');
    formData.append("numero", 1);

    axios.get(`http://localhost:3001/entregables/${id}/JR/1`)
    .then(response => {
      return response.data;
    })
    .then(response => {
      if(response.length >= 1)
      {
        fetch("http://localhost:3001/entregables/addAgain", {
          method: "POST",
          body: formData,
        })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
      else{
        fetch("http://localhost:3001/entregables/add", {
          method: "POST",
          body: formData,
        })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
    })
    .catch(error => {
      console.log(error);
    }) 
  };
  function upload2JR()
  {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("id", id);
    formData.append("tipo", 'JR');
    formData.append("numero", 2);

    axios.get(`http://localhost:3001/entregables/${id}/JR/2`)
    .then(response => {
      return response.data;
    })
    .then(response => {
      if(response.length >= 1)
      {
        fetch("http://localhost:3001/entregables/addAgain", {
          method: "POST",
          body: formData,
        })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
      else{
        fetch("http://localhost:3001/entregables/add", {
          method: "POST",
          body: formData,
        })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
    })
    .catch(error => {
      console.log(error);
    }) 
  };
  function upload3JR()
  {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("id", id);
    formData.append("tipo", 'JR');
    formData.append("numero", 3);

    axios.get(`http://localhost:3001/entregables/${id}/JR/3`)
    .then(response => {
      return response.data;
    })
    .then(response => {
      if(response.length >= 1)
      {
        fetch("http://localhost:3001/entregables/addAgain", {
          method: "POST",
          body: formData,
        })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
      else{
        fetch("http://localhost:3001/entregables/add", {
          method: "POST",
          body: formData,
        })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
    })
    .catch(error => {
      console.log(error);
    }) 
  };

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

  const [data, setData] = React.useState([{"id":"id"},{"nombre":"nombre"},{"apellido":"apellido"},{"planta":"planta"},{"email":"email"},{"contrasenia":"contrasenia"},{"id_s":"id_s"},{"p_jm":0},{"p_ji":0},{"p_jr":0},{"balance":0},{"operarios_c":0},{"total_operarios":0},{"mejoras_i":0},{"total_pts":0}])
  const [error, setError] = React.useState("")
  const [loading, setLoading] = React.useState(true)

  const [operarios, setOperarios] = React.useState();
  const [totalOperarios, setTotalOperarios] = React.useState();
  const [mejoras, setMejoras] = React.useState();

  const [minsParoAntes, setMinsParoAntes] = React.useState();
  const [minsParoDespues, setMinsParoDespues] = React.useState();
  const [envasesAntes, setEnvasesAntes] = React.useState();
  const [envasesDespues, setEnvasesDespues] = React.useState();
  const [minsCambioAntes, setMinsCambioAntes] = React.useState();
  const [minsCambioDespues, setMinsCambioDespues] = React.useState();

  React.useEffect(() => {
    const url = `http://localhost:3001/supervisors/${user}/${pwd}`;
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

  function updateOperators()
  {
    let item={id_: id, operarios_: operarios, totalOperarios_: totalOperarios}
    console.warn("item", item)
    fetch(`http://localhost:3001/supervisors/update_operators/${user}`, {
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

  function updateImprovements()
  {
    let item={id_: id, mejoras_: mejoras}
    console.warn("item", item)
    fetch(`http://localhost:3001/supervisors/update_improvements/${user}`, {
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

  function updateProcess()
  {
    let item={id_: id, minsParo_: minsParoAntes, minsParoDespues_: minsParoDespues, envases_: envasesAntes, envasesDespues_: envasesDespues, minsCambio_: minsCambioAntes, minsCambioDespues_: minsCambioDespues}
    console.warn("item", item)
    fetch(`http://localhost:3001/supervisors/update_progress/${user}`, {
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

  return (
    <div>
      <NavBarU />
      {loading && "Cargando información"}
      {error && <div> {`Error al cargar la información ${error}`} </div>}
      <Container className="content">
        <Row>
          <Col sm={4}>
            <img src={ji} width="100" height="100" className="d-inline-block align-top" alt="ji logo" />
            <h2 className="colElement">Job Instructions</h2>
            <Accordion defaultActiveKey={['0']} alwaysOpen className="colElement">
              <Accordion.Item eventKey="0" className="item">
                <Accordion.Header>Entregables Job Instructions</Accordion.Header>
                <Accordion.Body>
                  <Button onClick={handleShowJI1} variant="dark" className="botonCursos"> Entregable 1 | Calificación: {grade1JI}</Button>
                  <Button onClick={handleShowJI2} variant="dark" className="botonCursos"> Entregable 2 | Calificación: {grade2JI} </Button>
                  <Button onClick={handleShowJI3} variant="dark" className="botonCursos"> Entregable 3 | Calificación: {grade3JI} </Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col sm={4}>
            <img src={jm} width="100" height="100" className="d-inline-block align-top" alt="jm logo" />
            <h2 className="colElement">Job Methods</h2>
            <Accordion defaultActiveKey={['0']} alwaysOpen className="colElement">
              <Accordion.Item eventKey="0" className="item">
                <Accordion.Header>Entregables sobre Job Methods</Accordion.Header>
                <Accordion.Body>
                  <Button onClick={handleShowJM1} variant="dark" className="botonCursos"> Entregable 1 | Calificación: {grade1JM} </Button>
                  <Button onClick={handleShowJM2} variant="dark" className="botonCursos"> Entregable 2 | Calificación: {grade2JM} </Button>
                  <Button onClick={handleShowJM3} variant="dark" className="botonCursos"> Entregable 3 | Calificación: {grade3JM} </Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col sm={4}>
            <img src={jr} width="100" height="100" className="d-inline-block align-top" alt="jr logo" />
            <h2 className="colElement">Job Relations</h2>
            <Accordion defaultActiveKey={['0']} alwaysOpen className="colElement"> 
              <Accordion.Item eventKey="0" className="item">
                <Accordion.Header>Entregables Job Relations</Accordion.Header>
                <Accordion.Body>
                  <Button onClick={handleShowJR1} variant="dark" className="botonCursos"> Entregable 1 | Calificación: {grade1JR} </Button>
                  <Button onClick={handleShowJR2} variant="dark" className="botonCursos"> Entregable 2 | Calificación: {grade2JR} </Button>
                  <Button onClick={handleShowJR3} variant="dark" className="botonCursos"> Entregable 3 | Calificación: {grade3JR} </Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Accordion className="updateItem">
              <Accordion.Item eventKey="4" className="item">
                <Accordion.Header>Actualizar operarios capacitados</Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label></Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Operarios capacitados"
                        value={operarios}
                        onChange={(e) => {setOperarios(e.target.value)}} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label></Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Total de operarios a capacitar"
                        value={totalOperarios}
                        onChange={(e) => {setTotalOperarios(e.target.value)}} />
                    </Form.Group>
                    <Button className="botonCursos" onClick={updateOperators} variant="dark">
                      Actualizar
                    </Button>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className="updateItem"> 
              <Accordion.Item eventKey="5" className="item">
                <Accordion.Header>Actualizar mejoras implementadas</Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label></Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Mejoras implementadas"
                        value={mejoras}
                        onChange={(e) => {setMejoras(e.target.value)}} />
                    </Form.Group>
                    <Button className="botonCursos" onClick={updateImprovements} variant="dark">
                      Actualizar
                    </Button>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col sm={8}>
            <Accordion className="updateItemR"> 
              <Accordion.Item eventKey="6" className="item">
                <Accordion.Header>Actualizar indicadores de progreso</Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Row>
                      <h4>Minutos de paro (mins/mes)</h4>
                      <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label></Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Medición sin TWI"
                            value={minsParoAntes}
                            onChange={(e) => {setMinsParoAntes(e.target.value)}} />
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label></Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Medición con TWI"
                            value={minsParoDespues}
                            onChange={(e) => {setMinsParoDespues(e.target.value)}} />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <h4>Envases desechados (tarimas/mes)</h4>
                      <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label></Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Medición sin TWI"
                            value={envasesAntes}
                            onChange={(e) => {setEnvasesAntes(e.target.value)}} />
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label></Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Medición con TWI"
                            value={envasesDespues}
                            onChange={(e) => {setEnvasesDespues(e.target.value)}} />
                        </Form.Group>
                      </Col>
                    </Row> 
                    <Row>
                      <h4>Minutos por cambio de formato (mins/mes)</h4>
                      <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label></Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Medición sin TWI"
                            value={minsCambioAntes}
                            onChange={(e) => {setMinsCambioAntes(e.target.value)}} />
                        </Form.Group> 
                      </Col>
                      <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label></Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Medición con TWI"
                            value={minsCambioDespues}
                            onChange={(e) => {setMinsCambioDespues(e.target.value)}} />
                        </Form.Group> 
                      </Col>
                    </Row>   
                    <Button className="botonCursos" onClick={updateProcess} variant="dark">
                      Actualizar
                    </Button>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className="updateItemR"> 
              <Accordion.Item eventKey="7" className="item">
                <Accordion.Header>Datos actuales</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover variant="light" className="tabla">
                    <thead>
                      <tr>
                        <th>Indicador</th>
                        <th>Valor actual</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Operarios capacitados</td>
                        <td>{data[0].operarios_c}</td>
                      </tr>
                      <tr>
                        <td>Total de operarios</td>
                        <td>{data[0].total_operarios}</td>
                      </tr>
                      <tr>
                        <td>Mejoras implementadas</td>
                        <td>{data[0].mejoras_i}</td>
                      </tr>
                      <tr>
                        <td>Minutos de paro sin TWI</td>
                        <td>{data[0].minutos_de_paro}</td>
                      </tr>
                      <tr>
                        <td>Minutos de paro con TWI</td>
                        <td>{data[0].minutos_de_paro_despues}</td>
                      </tr>
                      <tr>
                        <td>Envases desechados sin TWI</td>
                        <td>{data[0].envases_desechados}</td>
                      </tr>
                      <tr>
                        <td>Envases desechados con TWI</td>
                        <td>{data[0].envases_desechados_despues}</td>
                      </tr>
                      <tr>
                        <td>Minutos por cambio sin TWI</td>
                        <td>{data[0].minutos_por_cambio}</td>
                      </tr>
                      <tr>
                        <td>Minutos por cambio con TWI</td>
                        <td>{data[0].minutos_por_cambio_despues}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion> 
          </Col>

          <Modal
            show={showJI1}
            onHide={handleCloseJI1}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Agregar Entregable 1 de Job Instructions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="file"
                    name="file"
                    onChange={changeHandler}
                  />
                </Form.Group>
                {isFilePicked ? (
                  <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Nombre del archivo:</Form.Label>
                      <Form.Control
                        type="text"
                        value={selectedFile.name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Tipo de archivo:</Form.Label>
                      <Form.Control
                        type="text"
                        value={selectedFile.type} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Tamaño del archivo en bytes:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Escribir opción correcta"
                        value={selectedFile.size} />
                    </Form.Group>
                  </div>
                ) : (
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Seleccionar el archivo para ver sus detalles</Form.Label>
                  </Form.Group>
                )}
                <Button variant="primary" onClick={upload1JI}>
                  Subir archivo
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
          <Modal
            show={showJI2}
            onHide={handleCloseJI2}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Agregar Entregable 2 de Job Instructions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="file"
                    name="file"
                    onChange={changeHandler}
                  />
                </Form.Group>
                {isFilePicked ? (
                  <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Nombre del archivo:</Form.Label>
                      <Form.Control
                        type="text"
                        value={selectedFile.name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Tipo de archivo:</Form.Label>
                      <Form.Control
                        type="text"
                        value={selectedFile.type} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Tamaño del archivo en bytes:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Escribir opción correcta"
                        value={selectedFile.size} />
                    </Form.Group>
                  </div>
                ) : (
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Seleccionar el archivo para ver sus detalles</Form.Label>
                  </Form.Group>
                )}
                <Button variant="primary" onClick={upload2JI}>
                  Subir archivo
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
          <Modal
            show={showJI3}
            onHide={handleCloseJI3}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Agregar Entregable 3 de Job Instructions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="file"
                    name="file"
                    onChange={changeHandler}
                  />
                </Form.Group>
                {isFilePicked ? (
                  <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Nombre del archivo:</Form.Label>
                      <Form.Control
                        type="text"
                        value={selectedFile.name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Tipo de archivo:</Form.Label>
                      <Form.Control
                        type="text"
                        value={selectedFile.type} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Tamaño del archivo en bytes:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Escribir opción correcta"
                        value={selectedFile.size} />
                    </Form.Group>
                  </div>
                ) : (
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Seleccionar el archivo para ver sus detalles</Form.Label>
                  </Form.Group>
                )}
                <Button variant="primary" onClick={upload3JI}>
                  Subir archivo
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
          <Modal
            show={showJM1}
            onHide={handleCloseJM1}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Agregar Entregable 1 de Job Methods</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="file"
                    name="file"
                    onChange={changeHandler}
                  />
                </Form.Group>
                {isFilePicked ? (
                  <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Nombre del archivo:</Form.Label>
                      <Form.Control
                        type="text"
                        value={selectedFile.name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Tipo de archivo:</Form.Label>
                      <Form.Control
                        type="text"
                        value={selectedFile.type} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Tamaño del archivo en bytes:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Escribir opción correcta"
                        value={selectedFile.size} />
                    </Form.Group>
                  </div>
                ) : (
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Seleccionar el archivo para ver sus detalles</Form.Label>
                  </Form.Group>
                )}
                <Button variant="primary" onClick={upload1JM}>
                  Subir archivo
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
          <Modal
            show={showJM2}
            onHide={handleCloseJM2}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Agregar Entregable 2 de Job Methods</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="file"
                    name="file"
                    onChange={changeHandler}
                  />
                </Form.Group>
                {isFilePicked ? (
                  <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Nombre del archivo:</Form.Label>
                      <Form.Control
                        type="text"
                        value={selectedFile.name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Tipo de archivo:</Form.Label>
                      <Form.Control
                        type="text"
                        value={selectedFile.type} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Tamaño del archivo en bytes:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Escribir opción correcta"
                        value={selectedFile.size} />
                    </Form.Group>
                  </div>
                ) : (
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Seleccionar el archivo para ver sus detalles</Form.Label>
                  </Form.Group>
                )}
                <Button variant="primary" onClick={upload2JM}>
                  Subir archivo
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
          <Modal
            show={showJM3}
            onHide={handleCloseJM3}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Agregar Entregable 3 de Job Methods</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="file"
                    name="file"
                    onChange={changeHandler}
                  />
                </Form.Group>
                {isFilePicked ? (
                  <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Nombre del archivo:</Form.Label>
                      <Form.Control
                        type="text"
                        value={selectedFile.name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Tipo de archivo:</Form.Label>
                      <Form.Control
                        type="text"
                        value={selectedFile.type} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Tamaño del archivo en bytes:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Escribir opción correcta"
                        value={selectedFile.size} />
                    </Form.Group>
                  </div>
                ) : (
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Seleccionar el archivo para ver sus detalles</Form.Label>
                  </Form.Group>
                )}
                <Button variant="primary" onClick={upload3JM}>
                  Subir archivo
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
          <Modal
            show={showJR1}
            onHide={handleCloseJR1}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Agregar Entregable 1 de Job Relations</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="file"
                    name="file"
                    onChange={changeHandler}
                  />
                </Form.Group>
                {isFilePicked ? (
                  <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Nombre del archivo:</Form.Label>
                      <Form.Control
                        type="text"
                        value={selectedFile.name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Tipo de archivo:</Form.Label>
                      <Form.Control
                        type="text"
                        value={selectedFile.type} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Tamaño del archivo en bytes:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Escribir opción correcta"
                        value={selectedFile.size} />
                    </Form.Group>
                  </div>
                ) : (
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Seleccionar el archivo para ver sus detalles</Form.Label>
                  </Form.Group>
                )}
                <Button variant="primary" onClick={upload1JR}>
                  Subir archivo
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
          <Modal
            show={showJR2}
            onHide={handleCloseJR2}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Agregar Entregable 2 de Job Relations</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="file"
                    name="file"
                    onChange={changeHandler}
                  />
                </Form.Group>
                {isFilePicked ? (
                  <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Nombre del archivo:</Form.Label>
                      <Form.Control
                        type="text"
                        value={selectedFile.name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Tipo de archivo:</Form.Label>
                      <Form.Control
                        type="text"
                        value={selectedFile.type} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Tamaño del archivo en bytes:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Escribir opción correcta"
                        value={selectedFile.size} />
                    </Form.Group>
                  </div>
                ) : (
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Seleccionar el archivo para ver sus detalles</Form.Label>
                  </Form.Group>
                )}
                <Button variant="primary" onClick={upload2JR}>
                  Subir archivo
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
          <Modal
            show={showJR3}
            onHide={handleCloseJR3}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Agregar Entregable 3 de Job Relations</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="file"
                    name="file"
                    onChange={changeHandler}
                  />
                </Form.Group>
                {isFilePicked ? (
                  <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Nombre del archivo:</Form.Label>
                      <Form.Control
                        type="text"
                        value={selectedFile.name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Tipo de archivo:</Form.Label>
                      <Form.Control
                        type="text"
                        value={selectedFile.type} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Tamaño del archivo en bytes:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Escribir opción correcta"
                        value={selectedFile.size} />
                    </Form.Group>
                  </div>
                ) : (
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Seleccionar el archivo para ver sus detalles</Form.Label>
                  </Form.Group>
                )}
                <Button variant="primary" onClick={upload3JR}>
                  Subir archivo
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </Row>
      </Container>
    </div>
  );
};

export default Contents;