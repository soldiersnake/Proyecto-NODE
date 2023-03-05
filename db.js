// // referencia de la conexion a la base de datos
// const mysql = require('mysql');
// const util = require('util');

// const pool = mysql.createPool({
//     connectionLimit : 10,
//     host : 'localhost',
//     user : 'root',
//     password : '',
//     database : 'noticias'
// });

// pool.query = util.promisify(pool.query); // hace q el pool sea trabajado como promesa
// console.log('Conexion a la base de datos realizada');

// module.exports = pool;

const knex = require('knex')({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    pool: {min: 0, max:10}
});

module.exports = knex;