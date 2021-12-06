import axios from 'axios';
import { url } from './config';

export const listarReportes = (carnet) => {
  const urlhttp = `${url}/api/reporte/list${carnet ? `/${carnet}` : ""}`;
  return axios.get(urlhttp);
};

export const crearReporte = (carnet, nombre, curso, reporte) => {
  return axios.post(`${url}/api/reporte`, {
    carnet,
    nombre,
    curso,
    reporte
  });
};

export const detallarReporte = (id) => {
  return axios.get(`${url}/api/reporte/details/${id}`)
}