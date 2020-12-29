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

exports.addMovie = async function(request) {
    return new Promise((resolve, reject) => {
        db.executeQuery(`
        insert into movies (movie_title,movie_year,movie_summary,movie_type,movie_duration)
        values ("${request.body.title}",${request.body.year},"${request.body.summary}", "${request.body.type}", ${request.body.duration});`).then((res) => {
            resolve(res);
        })
    })
}