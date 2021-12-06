const express = require('express');
const cors = require('cors');
const helmet = require('helmet')
const {
  listarTodos,
  listarUno,
  registrar,
  detalle
} = require('../controller/reporte.controller');

const app = express();
app.use(cors());
app.use(helmet());

/**
 * METODO: POST
 * ENDPOINT: /api/reporte
 * BODY: {carnet: string, curso: string, nombre: string, reporte: string}
 * RESPONSE: {msg: string}
 * ERROR: {msg: string}
 */
app.post('/', async (req, res) => {
  const { carnet, curso, nombre, reporte } = req.body;
  if (!carnet || !curso || !nombre || !reporte) {
    return res.status(400).json({
      msg: "No se puede completar la petición. Faltan campos."
    })
  }
  const result = await registrar(carnet, curso, nombre, reporte);
  return res.status(result.status).json(result.payload);
});

/**
 * METODO: GET
 * ENDPOINT: /api/reporte/list/:carnet
 * PARAMS: {carnet: string}
 * RESPONSE: {atendido: string, 
 *          reportes: [{carnet: string, fecha: string (yyyy-mm-dd), id: string, nombre: string, proyecto: string, reporte: string, servidor: string}]}
 */
app.get('/list/:carnet', async (req, res) => {
  const params = req.params;
  let result = await listarUno(params.carnet);
  return res.status(result.status).json(result.payload)
})

/**
 * METODO: GET
 * ENDPOINT: /api/reporte/list/
 * PARAMS: {carnet: string}
 * RESPONSE: {atendido: string, 
 *          reportes: [{carnet: string, fecha: string (yyyy-mm-dd), id: string, nombre: string, proyecto: string, reporte: string, servidor: string}]}
 */
 app.get('/list/', async (_, res) => {
  let result = await listarTodos();
  return res.status(result.status).json(result.payload)
})


/**
 * METODO: POST
 * ENDPOINT: /api/details/:id
 * PARAMS: {id: string}
 * RESPONSE: {atendido: string, carnet: string, fecha: date (yyyy-mm-dd), id: string, nombre: string, proyecto: string, reporte: string, servidor: string}
 */
app.get('/details/:id', async (req, res) => {
  const params = req.params;
  if (params.id) {
    let response = await detalle(params.id);
    return res.status(response.status).json(response.payload);
  }
  return res.status(400).json({payload: {msg: "Faltan campos"}});
})

module.exports = app;