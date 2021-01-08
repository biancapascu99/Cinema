var db = require('../Database');

exports.readSchedules = async function() {
    return new Promise((resolve, reject) => {
        db.executeQuery(`SELECT s.RoomId, m.MovieId, m.movie_title, r.room_name, s.screening_date, s.ScreeningId
        from movies m
        join screening s on (m.MovieId=s.MovieId)
        join rooms r on (r.RoomId = s.RoomId)
        order by 6 desc;        
       `).then((res) => {
            resolve(res);
        })
    })
}

exports.addSchedule = async function(request) {
    return new Promise((resolve, reject) => {
        db.executeQuery(`
                INSERT INTO screening (RoomId, MovieId, screening_date)
                value (${request.body.roomId},${request.body.movieId},(CAST(N'${request.body.date}' AS DateTime)));
                `).then((res) => {
            resolve(res);
        })
    })
}

exports.deleteSchedule = async function(request) {
    return new Promise((resolve, reject) => {
        console.log(request)
        db.executeQuery(`
        delete from screening
        where ScreeningId = ${request};`).then((res) => {
            resolve(res);
        })
    })
}

exports.readSchedule = async function(request) {
    return new Promise((resolve, reject) => {
        db.executeQuery(`
        SELECT *
        FROM screening
        where ScreeningId = ${request};`).then((res) => {
            resolve(res);
        })
    })
}

exports.updateSchedule = async function(request) {
    return new Promise((resolve, reject) => {
        db.executeQuery(`
        update screening 
        set MovieId = ${request.body.movieId}, RoomId = ${request.body.roomId}, screening_date = (CAST(N'${request.body.date}' AS DateTime))
        where ScreeningId = ${request.body.id}`).then((res) => {
            resolve(res);
        })
    })
}