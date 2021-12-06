const { Reporte } = require('../model/reporte.model');

/**
 * Registra un nuevo reporte
 * @param {String} carnet 
 * @param {String} curso 
 * @param {String} nombre 
 * @param {String} reporte 
 */
exports.registrar = async (carnet, curso, nombre, reporte) => {
  try {
    const nuevo = new Reporte({
      carnet: carnet,
      proyecto: curso,
      nombre: nombre,
      reporte: reporte,
      fecha: new Date(),
      servidor: process.env.SERVER_ID
    });
    await nuevo.save();
    return { payload: { msg: 'Reporte registrado' }, ok: true, status: 200 };
  } catch (e) {
    console.error(e);
    return { payload: { msg: 'No se pudo registrar el reporte' }, ok: true, status: 500 };
  }
}

/**
 * Recuperar todos los reportes de la base de datos
 */
exports.listarTodos = async () => {
  var resultSet = [];
  try {
    resultSet = await Reporte.find(
      {},
      'carnet fecha id nombre proyecto reporte servidor'
    ).exec();
  } catch (e) {
    console.error(e);
    return {
      payload: {
        msg: "No se pudo recupera la lista de reportes"
      },
      status: 500,
      ok: false
    }
  }
  return {
    payload: {
      atendido: `Solicitud atendida por el servidor ${process.env.SERVER_ID}`,
      reportes: resultSet,
    },
    status: 200,
    ok: true
  }
}

/**
 * Recuperar todos los reportes asociados a un carnet
 * @param {String} carnet 
 */
exports.listarUno = async (carnet) => {
  var resultSet = [];
  try {
    resultSet = await Reporte.find(
      { carnet },
      'carnet fecha id nombre proyecto reporte servidor'
    ).exec();
  } catch (e) {
    console.error(e);
    return {
      payload: {
        msg: "No se pudo recupera la lista de reportes"
      },
      status: 500,
      ok: false
    }
  }
  return {
    payload: {
      atendido: `Solicitud atendida por el servidor ${process.env.SERVER_ID}`,
      reportes: resultSet,
    },
    status: 200,
    ok: true
  }
}

/**
 * Recupera el detalle de un reporte usando el id del
 * objeto almacenado de la base de datos
 * @param {String} id 
 */
exports.detalle = async (id) => {
  try {
    let response = await Reporte.findById(id).exec();
    return {
      payload: {
        atendido: `Solicitud atendida por el servidor ${process.env.SERVER_ID}`,
        carnet: response.carnet,
        fecha: response.fecha,
        id: response._id,
        nombre: response.nombre,
        proyecto: response.proyecto,
        reporte: response.reporte,
        servidor: response.servidor
      }, status: 200, ok: true
    };
  } catch (e) {
    console.error(e);
    return { status: 500, ok: false, payload: { msg: "No se pudo recuperar la información" } };
  }
}