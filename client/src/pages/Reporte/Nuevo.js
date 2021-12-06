import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { crearReporte } from '../../selectors/reporte';

export const Nuevo = () => {

  const [carnet, setCarnet] = useState('');
  const [nombre, setNombre] = useState('');
  const [curso, setCurso] = useState('');
  const [reporte, setReporte] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    crearReporte(
      carnet,
      nombre,
      curso,
      reporte
    ).then(r => {
      alert(r.data.msg);
    }).catch(e => console.error(e));
    limpiar();
  }

  const carnetChange = (e) => {
    setCarnet(e.target.value);
  }

  const nombreChange = (e) => {
    setNombre(e.target.value);
  }

  const cursoChange = (e) => {
    setCurso(e.target.value);
  }

  const reporteChange = (e) => {
    setReporte(e.target.value);
  }

  const limpiar = () => {
    setCarnet('');
    setNombre('');
    setCurso('');
    setReporte('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel id="lblCarnet" label="Carnet" className="mb-3">
        <Form.Control id="txtCarnet" required type="text" placeholder="Carnet" value={carnet} onChange={carnetChange} />
      </FloatingLabel>
      <FloatingLabel id="lblNombre" label="Nombre" className="mb-3">
        <Form.Control id="txtNombre" required type="text" placeholder="Nombre" value={nombre} onChange={nombreChange} />
      </FloatingLabel>
      <FloatingLabel id="lblCurso" label="Curso / Proyecto" className="mb-3">
        <Form.Control id="txtCurso" required type="text" placeholder="Curso / Proyecto" value={curso} onChange={cursoChange} />
      </FloatingLabel>
      <FloatingLabel id="lblReporte" className="mb-3" label="Cuerpo del mensaje">
        <Form.Control
          as="textarea"
          id="txtReporte"
          placeholder="Cuerpo del mensaje"
          style={{ height: '100px' }}
          onChange={reporteChange}
          value={reporte}
          required
        />
      </FloatingLabel>
      <Button variant="primary" type="submit" size="lg">Registrar</Button>
    </Form>
  )
}
