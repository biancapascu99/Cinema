const mysql = require('mysql');

const mysqlConfig = {
    host: 'localhost',
    user: 'root',
    password: 'bianca199925@',
    database: 'cinema_daw',
    port: "3306"
}

var pool = mysql.createPool(mysqlConfig);

module.exports.connect = function(cb) {
    return new Promise((resolve, reject) => {
        var connection = mysql.createConnection(mysqlConfig);
        connection.connect((err) => {
            if (err) throw err;
            console.log('Connected!');
            resolve();
        });
    })
}

async function executeQuery(query) {
    return new Promise((resolve, reject) => {
        try {
            pool.query(query, (e, r, f) => {
                if (e) {
                    reject(e)
                } else {
                    resolve(r)
                }
            });
        } catch (ex) {
            reject(ex)
        }
    })
}

module.exports.executeQuery = executeQuery