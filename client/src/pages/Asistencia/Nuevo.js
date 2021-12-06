import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { crearAsistencia } from '../../selectors/asistencia';

export const Nuevo = () => {
  const [carnet, setCarnet] = useState('');
  const [nombre, setNombre] = useState('');
  const [evento, setEvento] = useState('');
  const [id, setId] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      // Convierte el archivo a BASE64
      var reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = () => {
        let imgB64 = reader.result;
        crearAsistencia(carnet, nombre, evento, id, imgB64)
          .then(r => {
            alert(r.data.msg);
            limpiar();
          })
          .catch(e => console.error(e));
      }
    }
  }

  const limpiar = () => {
    setCarnet('');
    setNombre('');
    setEvento('');
    setId('');
    setSelectedFile(null);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel id="lblId" label="Id del evento" className="mb-3">
        <Form.Control id="txtId" required type="number" placeholder="Id del evento" value={id} onChange={(e) => setId(e.target.value)} />
      </FloatingLabel>
      <FloatingLabel id="lblCarnet" label="Carnet del estudiante" className="mb-3">
        <Form.Control id="txtCarnet" required type="text" placeholder="Carnet del estudiante" value={carnet} onChange={(e) => setCarnet(e.target.value)} />
      </FloatingLabel>
      <FloatingLabel id="lblNombre" label="Nombre del estudiante" className="mb-3">
        <Form.Control id="txtNombre" required type="text" placeholder="Nombre del estudiante" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </FloatingLabel>
      <FloatingLabel id="lblEvento" label="Nombre del evento" className="mb-3">
        <Form.Control id="txtEvento" required type="text" placeholder="Nombre del evento" value={evento} onChange={(e) => setEvento(e.target.value)} />
      </FloatingLabel>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Seleccione la captura de pantalla del evento</Form.Label>
        <Form.Control
          type="file"
          required
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
      </Form.Group>
      <Button variant="primary" type="submit" size="lg">Registrar</Button>
    </Form>
  );
}
