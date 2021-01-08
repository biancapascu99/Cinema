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

exports.readMovies = async function() {
    return new Promise((resolve, reject) => {
        db.executeQuery(`SELECT * FROM movies order by 1 desc;
       `).then((res) => {
            resolve(res);
        })
    })
}

exports.deleteMovie = async function(request) {
    return new Promise((resolve, reject) => {
        console.log(request)
        db.executeQuery(`
        delete from movies
        where MovieId = ${request};`).then((res) => {
            resolve(res);
        })
    })
}

exports.readMovie = async function(request) {
    return new Promise((resolve, reject) => {
        db.executeQuery(`
        select *
        from movies
        where MovieId = ${request};`).then((res) => {
            resolve(res);
        })
    })
}

exports.updateMovie = async function(request) {
    return new Promise((resolve, reject) => {
        db.executeQuery(`
        update movies 
        set movie_title = "${request.body.title}",movie_year = ${request.body.year},movie_summary = "${request.body.summary}",
        movie_type = "${request.body.type}",movie_duration = ${request.body.duration}
        where MovieId = ${request.body.id}`).then((res) => {
            resolve(res);
        })
    })
}