import React, { useState } from "react";
import Logo from "../logos/Escuela Tecnica.png";
import "./LogPage.css";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import axios from 'axios';
import Cookies from 'universal-cookie';


function LogPage () {

  const cookies = new Cookies();

  const [user, setUser] = useState();
  const [pwd, setPwd] = useState();

  const handleChangeUser = async (e) =>{
    setUser(e.target.value)
  }

  const handleChangePwd = async (e) =>{
    setPwd(e.target.value)
  }

  const iniciarSesion = async (e) => {
    e.preventDefault();
    await axios.get(`http://localhost:3001/users/${user}/${pwd}`)
    .then(response => {
      return response.data;
    })
    .then(response => {
      if(response.length > 0)
      {
        var rsp = response[0];
        let id = rsp.id;
        if(id.charAt(0) === 'A')
        {
          axios.get(`http://localhost:3001/admins/${user}/${pwd}`)
          .then(response => {
            return response.data;
          })
          .then(response => {
            var respuesta = response[0];
            cookies.set('id', respuesta.id, {path: "/"});
            cookies.set('nombre', respuesta.nombre, {path: "/"});
            cookies.set('apellido', respuesta.apellido, {path: "/"});
            cookies.set('planta', respuesta.planta, {path: "/"});
            cookies.set('email', respuesta.email, {path: "/"});
            cookies.set('contrasenia', respuesta.contrasenia, {path: "/"});
            alert(`Bienvenido(a) ${respuesta.nombre} ${respuesta.apellido}`)
            window.location.href='./Homea';
          })
          .catch(error => {
            console.log(error);
          })        
        }
        else{
          axios.get(`http://localhost:3001/supervisors/${user}/${pwd}`)
          .then(response => {
            return response.data;
          })
          .then(response => {
            var respuesta = response[0];
            cookies.set('id', respuesta.id, {path: "/"});
            cookies.set('nombre', respuesta.nombre, {path: "/"});
            cookies.set('apellido', respuesta.apellido, {path: "/"});
            cookies.set('planta', respuesta.planta, {path: "/"});
            cookies.set('email', respuesta.email, {path: "/"});
            cookies.set('contrasenia', respuesta.contrasenia, {path: "/"});
            cookies.set('p_jm', respuesta.p_jm, {path: "/"});
            cookies.set('p_ji', respuesta.p_ji, {path: "/"});
            cookies.set('p_jr', respuesta.p_jr, {path: "/"});
            cookies.set('balance', respuesta.balance, {path: "/"});
            cookies.set('operarios_c', respuesta.operarios_c, {path: "/"});
            cookies.set('total_operarios', respuesta.total_operarios, {path: "/"});
            cookies.set('mejoras_i', respuesta.mejoras_i, {path: "/"});
            cookies.set('total_pts', respuesta.total_pts, {path: "/"});
            alert(`Bienvenido(a) ${respuesta.nombre} ${respuesta.apellido}`)
            window.location.href='./Home';
          })
          .catch(error => {
             console.log(error);
          })
        }
      }
      else{
        if(!user || !pwd)
        {
          alert('Ingresar email y/o contraseña')
        }
        else{
          alert('El correo o la contraseña no son correctos')
        }
      }   
    })
    .catch(error => {
      console.log(error);
    })
  }

    const componentDidMount = () => {
        if(cookies.get('id'))
        {
          let id = cookies.get('id')
          if(id.charAt(0) === 'S'){
            window.location.href='./home'
          }
          else{
            window.location.href='./homea'
          }
            
        }
    }

  return (
    <div>
      {componentDidMount()};
      <div className="mx-auto">
        <div className="contentlogpage">
          <div className="divimg">
            <img
              className="logoArca"
              className="img-fluid"
              className="mx-auto"
              src={Logo}
              alt=""
            />
          </div>
          <Form>
            <FloatingLabel label="Email" className="mb-3">
              <Form.Control 
                type="email"
                placeholder="Ingresar Email"
                id="username"
                autoComplete="off"
                onChange={handleChangeUser}
                value={user}
                required
              />
            </FloatingLabel>
            <FloatingLabel label="Contraseña">
              <Form.Control
                type="password"
                placeholder="Ingresar contraseña"
                id="password"
                onChange={handleChangePwd}
                value={pwd}
                required
              />
            </FloatingLabel>
            <Button 
              variant="dark"
              className="mx-auto"
              className="ButtonLog"
              onClick={iniciarSesion}
            >
              Ingresar
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LogPage;
