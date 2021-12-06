require('dotenv').config();
require('./config/config').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// configura servidor
const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

// configura las rutas del servidor
app.use('/api/reporte',require('./reporte/routes/reporte.routes'));
app.use('/api/asistencia',require('./asistencia/routes/asistencia.routes'));

mongoose.connect(process.env.MONGO_URI)
  .then(data => console.info(`${data.connection.db.databaseName} online`))
  .catch(error => console.error(error));

// inicia el servidor
module.exports = app.listen(process.env.PORT, process.env.HOST, () => {
  console.info(`listen ${process.env.HOST}:${process.env.PORT}`);
})