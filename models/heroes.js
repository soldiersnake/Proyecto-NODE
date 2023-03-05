const bd = require('./../db');

const list = () =>
    bd(process.env.T_HEROES)
    .select("id", "nombre", "descripcion")
    .where({habilitado: 1});

module.exports = list;