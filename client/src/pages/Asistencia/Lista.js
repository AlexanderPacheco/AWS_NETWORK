import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { listarPorEvento, listarPorAlumno, listar } from '../../selectors/asistencia';

export const Lista = () => {
  const [busqueda, setBusqueda] = useState('');
  const [carnet, isCarnet] = useState(); // determina si la busqueda se hace por carnet
  const [atendido, setAtendido] = useState('');
  const [reportes, setReportes] = useState([]);

  useEffect(() => {
    listar()
      .then(r => {
        if (r.status === 200) {
          setAtendido(r.data.atendido);
          setReportes(r.data.asistencia);
        }
      })
      .catch(e => console.error(e));
  }, []);


  const buscar = (e) => {
    e.preventDefault();
    if (busqueda.trim()) {
      if (!carnet) {
        listarPorEvento(busqueda)
          .then(r => {
            if (r.status === 200) {
              setAtendido(r.data.atendido);
              setReportes(r.data.asistencia);
            }
          })
          .catch(e => console.error(e));
      } else {
        listarPorAlumno(busqueda)
          .then(r => {
            if (r.status === 200) {
              setAtendido(r.data.atendido);
              setReportes(r.data.asistencia);
            }
          })
          .catch(e => console.error(e));
      }
    }
  }

  return (
    <>
      <Form onSubmit={buscar}>
        <FloatingLabel id="lblId" label="Carné o id de evento" className="mb-3">
          <Form.Control id="txtId" required type="text" placeholder="Carné o id de evento" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
        </FloatingLabel>
        <div key="inline-radio">
          <Form.Check
            type="radio"
            inline
            name="group1"
            label="Buscar por carnet"
            id="inline-radio-1"
            required
            onChange={(e) => isCarnet(true)}
          />
          <Form.Check
            type="radio"
            inline
            name="group1"
            label="Buscar por id de evento"
            id="inline-radio-2"
            required
            onChange={(e) => isCarnet(false)}
          />
        </div>
        <Button variant="dark" type="submit" size="lg">Buscar</Button>
      </Form>
      <hr />
      <Table striped bordered hover className="mb-3">
        <thead>
          <tr>
            <th scope="col">Carnet</th>
            <th scope="col">Estudiante</th>
            <th scope="col">Id Evento</th>
            <th scope="col">Evento</th>
            <th scope="col">Fecha</th>
            <th scope="col">Servidor</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            reportes.map(
              reporte => (
                <tr key={reporte._id}>
                  <td>{reporte.carnet}</td>
                  <td>{reporte.nombre}</td>
                  <td>{reporte.id}</td>
                  <td>{reporte.evento}</td>
                  <td>{new Date(reporte.fecha_hora).toLocaleString()}</td>
                  <td>{reporte.servidor}</td>
                  <td><a target="_blank" rel="noopoener noreferrer" href={reporte.link}>Ver imagen</a></td>
                </tr>
              )
            )
          }
        </tbody>
      </Table>
      <strong>{atendido}</strong>
    </>
  )
}