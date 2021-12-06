
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { listarReportes } from '../../selectors/reporte'

export const Lista = () => {

  const [carnet, setCarnet] = useState('');
  const [atendido, setAtendido] = useState('');
  const [reportes, setReportes] = useState([]);

  useEffect(() => {
    listarReportes()
      .then(r => {
        if (r.status === 200) {
          setAtendido(r.data.atendido);
          setReportes(r.data.reportes);
        }
      })
      .catch(e => console.error(e));
  }, []);

  const buscarCarnet = (e) => {
    e.preventDefault();
    if (carnet.trim()) {
      listarReportes(carnet)
        .then(r => {
          if (r.status === 200) {
            setAtendido(r.data.atendido);
            setReportes(r.data.reportes);
          }
        })
        .catch(e => console.error(e));
    }
  }

  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Carnet"
          aria-label="Carnet"
          aria-describedby="basic-addon1"
          value={carnet}
          onChange={(e) => setCarnet(e.target.value)}
        />
        <button
          className="btn btn-dark"
          onClick={buscarCarnet}>
          Buscar
        </button>
      </div>
      <hr />
      <Table striped bordered hover className="mb-3">
        <thead>
          <tr>
            <th scope="col">Carnet</th>
            <th scope="col">Nombre</th>
            <th scope="col">Proyecto</th>
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
                  <td>{reporte.proyecto}</td>
                  <td>{new Date(reporte.fecha).toLocaleDateString()}</td>
                  <td>{reporte.servidor}</td>
                  <td> <Link className="link-dark" to={`/reporte/${reporte._id}`}> Ver </Link> </td>
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