const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reporteSchema = Schema({
  carnet: {
    type: Schema.Types.String,
    required: true,
  },
  nombre: {
    type: Schema.Types.String,
    required: true
  },
  proyecto: { // también puede tomar el nombre de curso
    type: Schema.Types.String,
    required: true
  },
  reporte: {
    type: Schema.Types.String,
    required: true
  },
  fecha: { // Momento en la que se almacenó el objeto
    type: Schema.Types.Date,
    default: Date.now
  },
  servidor: { // Servidor que proceso la escritura del objeto
    type: Schema.Types.String,
    default: process.env.SERVER_ID
  }
})

const Reporte = mongoose.model('reporte', reporteSchema);

module.exports = { Reporte };