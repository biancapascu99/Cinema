var db = require('../Database');

exports.readSchedule = async function() {
    return new Promise((resolve, reject) => {
        db.executeQuery(`SELECT m.MovieId,m.movie_image, m.movie_title, s.screening_date, s.RoomId, s.ScreeningId
        from movies m
        join screening s on (m.MovieId=s.MovieId)
       `).then((res) => {
            resolve(res);
        })
    })
}