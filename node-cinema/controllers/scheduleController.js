var db = require('../Database');

exports.readSchedule = async function() {
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