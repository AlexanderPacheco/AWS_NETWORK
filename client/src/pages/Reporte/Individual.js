import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { detallarReporte } from '../../selectors/reporte'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export const Individual = () => {
  const { id } = useParams();

  const [carnet, setCarnet] = useState('');
  const [nombre, setNombre] = useState('');
  const [proyecto, setProyecto] = useState('');
  const [fecha, setFecha] = useState('');
  const [servidor, setServidor] = useState('');
  const [reporte, setReporte] = useState('');
  const [atendido, setAtendido] = useState('');

  useEffect(() => {
    detallarReporte(id)
      .then(r => {
        const {carnet, nombre, proyecto, fecha, servidor, reporte, atendido} = r.data;
        setCarnet(carnet);
        setNombre(nombre);
        setProyecto(proyecto);
        let date = new Date(fecha);
        setFecha(date.toLocaleString());
        setServidor(servidor);
        setReporte(reporte);
        setAtendido(atendido);
      })
      .catch(e => console.error(e));
  }, [id]);

  return (
    <Form>
      <FloatingLabel id="lblCarnet" label="Carnet" className="mb-3">
        <Form.Control id="txtCarnet" readOnly type="text" placeholder="Carnet" value={carnet}  />
      </FloatingLabel>
      <FloatingLabel id="lblNombre" label="Nombre" className="mb-3">
        <Form.Control id="txtNombre" readOnly type="text" placeholder="Nombre" value={nombre}  />
      </FloatingLabel>
      <FloatingLabel id="lblCurso" label="Curso / Proyecto" className="mb-3">
        <Form.Control id="txtCurso" readOnly type="text" placeholder="Curso / Proyecto" value={proyecto} />
      </FloatingLabel>
      <FloatingLabel id="lblProcesado" label="Procesado por" className="mb-3">
        <Form.Control id="txtCurso" readOnly type="text" placeholder="Curso / Proyecto" value={servidor}  />
      </FloatingLabel>
      <FloatingLabel id="lblFecha" label="Fecha" className="mb-3">
        <Form.Control id="txtFecha" readOnly type="text" placeholder="Curso / Proyecto" value={fecha} />
      </FloatingLabel>
      <FloatingLabel id="lblReporte"  className="mb-3" label="Cuerpo del mensaje">
        <Form.Control
          as="textarea"
          id="txtReporte"
          placeholder="Cuerpo del mensaje"
          style={{ height: '100px' }}
          value={reporte}
          readOnly
        />
      </FloatingLabel>
      <strong>{atendido}</strong>
    </Form>
  )

}