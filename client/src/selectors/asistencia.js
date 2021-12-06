import axios from 'axios';
import { url } from './config';

export const crearAsistencia = (carnet, nombre, evento, id, imgB64) => {
  return axios.post(`${url}/api/asistencia`, { carnet, nombre, evento, id, imgB64 });
}

export const listarPorEvento = (id) => {
  return axios.get(`${url}/api/asistencia/event/${id}`)
}

export const listarPorAlumno = (carnet) => {
  return axios.get(`${url}/api/asistencia/carnet/${carnet}`)
}

export const listar = () => {
  return axios.get(`${url}/api/asistencia/list`)
}