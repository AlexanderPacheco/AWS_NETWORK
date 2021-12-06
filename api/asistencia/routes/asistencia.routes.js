const express = require('express');
const cors = require('cors');
const helmet = require('helmet')
const {
  registrar,
  listarPorEvento,
  listarPorCarne,
  listar
} = require('../controller/asistencia.controller');

const app = express();
app.use(cors());
app.use(helmet());

/**
 * METODO: POST
 * ENDPOINT: /api/asistencia/
 * BODY: {carnet:string,nombre:string,evento:string,id:number:imgB64:string}
 * RESPONSE: {payload: {msg:string}}
 * ERROR :{payload: {msg:string}}
 */
app.post('/', async (req, res) => {
  const { carnet, nombre, evento, id, imgB64 } = req.body;
  //console.log(req.body);
  if (!carnet || !nombre || !evento || (id===undefined) || !imgB64) {
    return res.status(400).json({
      msg: "No se puede completar la petición. Faltan campos."
    })
  }
  const result = await registrar(carnet, nombre, evento, id, imgB64);
  return res.status(result.status).json(result.payload);
})

/**
 * METODO: GET
 * ENPOINT: /api/asistencia/list
 * PARAMS: {id: number}
 * RESPONSE: {atendido: string, asistencia: [] }
 * ERROR: {payload: {msg:string}}
 */
app.get('/list', async(_,res) => {
  const result = await listar();
  return res.status(result.status).json(result.payload);
})

/**
 * METODO: GET
 * ENPOINT: /api/asistencia/event/:id
 * PARAMS: {id: number}
 * RESPONSE: {atendido: string, asistencia: [] }
 * ERROR: {payload: {msg:string}}
 */
app.get('/event/:id', async (req, res) => {
  const params = req.params;
  const result = await listarPorEvento(params.id);
  return res.status(result.status).json(result.payload);
})

/**
 * METODO: GET
 * ENDPOINT: /api/asistencia/carnet/:carnet
 * PARAMS: {carnet: string}
 * RESPONSE: {atendido: string, asistencia: [] }
 * ERROR: {payload: {msg:string}}
 */
app.get('/carnet/:carnet', async (req, res) => {
  const params = req.params;
  const result = await listarPorCarne(params.carnet);
  return res.status(result.status).json(result.payload);
})

module.exports = app;