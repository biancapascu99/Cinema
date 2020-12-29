var db = require('../Database');

exports.readMovieDetails = async function(id) {
    return new Promise((resolve, reject) => {
        db.executeQuery(`SELECT *
        from movies m
        where MovieId = ${id};
       `).then((res) => {
            resolve(res);
        })
    })
}