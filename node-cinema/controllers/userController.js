var crypto = require("crypto");
var db = require('../Database');
var JWT = require("./../middleware/jwt");

function hashPW(pwd) {
    return crypto
        .createHash("sha256")
        .update(pwd)
        .digest("base64")
        .toString();
}

exports.register = async function(request) {
    return new Promise((resolve, reject) => {
        db.executeQuery(`SELECT COUNT(*) as count FROM users
            WHERE user_email= "${request.body.email}";`).then((res) => {
            if (res[0].count == 0) {
                password = hashPW(request.body.password);
                db.executeQuery(`INSERT INTO users (user_email, user_password, user_type)
                     values ("${request.body.email}", "${password}", ${request.body.type})`).then((res2) => {
                    resolve(res2);
                })
            } else {
                reject({ error: "email-ul mai exista" })
            }
        })
    })
}

exports.login = async function(request) {
    return new Promise((resolve, reject) => {
        console.log(request.body)
        db.executeQuery(`SELECT COUNT(*) as count FROM users
            WHERE user_email= "${request.body.email}";`).then((res) => {
            if (res[0].count == 1) {
                password = hashPW(request.body.password);
                db.executeQuery(`SELECT user_password FROM users
                WHERE user_email= "${request.body.email}";`).then((res2) => {
                    if (res2[0].user_password === password) {
                        console.log('logat')
                        db.executeQuery(`SELECT UserId, user_type FROM users
                        WHERE user_email= "${request.body.email}";`).then((res3) => {
                            var token = JWT.getToken({
                                email: request.body.email,
                                _id: res3[0].UserId,
                                type: res3[0].user_type
                            });
                            resolve({
                                token: token,
                                email: request.body.email
                            });
                        })
                    }
                })
            } else {
                reject({ error: "user sau parole gresite" })
            }
        })
    })
}