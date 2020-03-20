const util = require('util');
const mysql = require('mysql');
/**
 * Connection to the database.
 *  */
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root', // use your mysql username.
    password: '', // user your mysql password.
    database: 'www'
});

pool.getConnection((err, connection) => {
    if(err) 
        console.error("Something went wrong connecting to the database ..." + err);
    
    if(connection)
        connection.release();
        console.log('Connected to Database');
    return;
});

pool.query = util.promisify(pool.query);

module.exports = pool;
