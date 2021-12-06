const { Asistencia } = require('../model/asistencia.model');
const AWS = require('aws-sdk');
const { v4 } = require('uuid');

/**
 * Crea un registro de asistencia
 * @param {string} carnet carné del estudiante
 * @param {string} nombre nombre de estudiante
 * @param {string} evento nombre del evento 
 * @param {number} id identificador del evento
 * @param {string} imgB64 imagen de asistencia en base64
 * @returns
 */
exports.registrar = async (carnet, nombre, evento, id, imgB64) => {
  try {
    // Crea el keyPath para el objeto a subir al bucket
    let keyPath = `${evento}-${id}-${carnet}-${v4()}`;
    const s3 = new AWS.S3();
    // Sube la imagen en base64
    const s3Response = await s3.upload({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: keyPath,
      Body: Buffer.from(imgB64.substring(imgB64.indexOf(',') + 1), 'base64'),
      ContentEncoding: 'base64',
      ContentType: imgB64.substring(imgB64.indexOf(':') + 1, imgB64.indexOf(';')),
      ACL: 'public-read'
    }).promise();
    // Crea el registro en la base de datos
    await Asistencia.create({
      carnet,
      nombre,
      evento,
      id,
      keyPath,
      link: s3Response.Location.toString() //Especifica el link directo de la imagen
    });
    return { payload: { msg: 'Asistencia registrada' }, ok: true, status: 200 };
  } catch (e) {
    console.error(e);
    return {
      payload: {
        msg: 'No se pudo registrar la asistencia',
        atendido: `Solicitud atendida por el servidor ${process.env.SERVER_ID}`
      }, ok: true, status: 500
    };
  }
}

/**
 * Recupera la lista de asistencia por eventos
 * @param {number} id 
 * @returns 
 */
exports.listarPorEvento = async (id) => {
  var resultSet = [];
  try {
    resultSet = await Asistencia.find({ id }).exec();
  } catch (e) {
    console.error(e);
    return {
      payload: {
        msg: "No se pudo recupera la lista de asistencia",
        atendido: `Solicitud atendida por el servidor ${process.env.SERVER_ID}`
      }, ok: true, status: 500
    };
  }
  return {
    payload: {
      atendido: `Solicitud atendida por el servidor ${process.env.SERVER_ID}`,
      asistencia: resultSet,
    },
    status: 200,
    ok: true
  }
}

/**
 * Recupera al lista de asistncia por carné
 * @param {string} carnet 
 * @returns 
 */
exports.listarPorCarne = async (carnet) => {
  var resultSet = [];
  try {
    resultSet = await Asistencia.find({ carnet }).exec();
  } catch (e) {
    console.error(e);
    return {
      payload: {
        msg: "No se pudo recupera la lista de asistencia",
        atendido: `Solicitud atendida por el servidor ${process.env.SERVER_ID}`
      }, ok: true, status: 500
    };
  }
  return {
    payload: {
      atendido: `Solicitud atendida por el servidor ${process.env.SERVER_ID}`,
      asistencia: resultSet,
    },
    status: 200,
    ok: true
  }
}

/**
 * Lista todos los registros de asistencia
 * @returns 
 */
exports.listar = async() => {
  var resultSet = [];
  try {
    resultSet = await Asistencia.find({  }).exec();
  } catch (e) {
    console.error(e);
    return {
      payload: {
        msg: "No se pudo recupera la lista de asistencia",
        atendido: `Solicitud atendida por el servidor ${process.env.SERVER_ID}`
      }, ok: true, status: 500
    };
  }
  return {
    payload: {
      atendido: `Solicitud atendida por el servidor ${process.env.SERVER_ID}`,
      asistencia: resultSet,
    },
    status: 200,
    ok: true
  }
}