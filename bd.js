// referencia de la conexion a la base de datos
const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'noticias'
});

pool.query = util.promisify(pool.query); // hace q el pool sea trabajado como promesa
console.log('Conexion a la base de datos realizada');

module.exports = pool;