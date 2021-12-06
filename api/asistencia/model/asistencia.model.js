const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const asistenciaSchema = Schema({
  carnet: {
    type: Schema.Types.String,
    required: true
  },
  nombre: {
    type: Schema.Types.String,
    required: true
  },
  evento: {
    type: Schema.Types.String,
    required: true
  },
  id: {
    type: Schema.Types.Number,
    required: true,
  },
  link: { //link directo a objeto en s3
    type: Schema.Types.String,
  },
  keyPath: { //keypath del objeto en s3
    type: Schema.Types.String,
  },
  fecha_hora: {
    type: Schema.Types.Date,
    default: Date.now
  },
  servidor: {
    type: Schema.Types.String,
    default: process.env.SERVER_ID
  }
})

const Asistencia = mongoose.model('asistencia', asistenciaSchema);

module.exports = {Asistencia};