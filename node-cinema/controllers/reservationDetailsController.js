var db = require('../Database');

exports.readReservationDetails = async function(id) {
    return new Promise((resolve, reject) => {
        db.executeQuery(`SELECT m.movie_title, s.screening_date, r.RoomId, r.room_capacity, t.ticket_seat ,p.projector_type
        from screening s
        left join tickets t ON (t.ScreeningId = s.ScreeningId)
        join movies m on (s.MovieId = m.MovieId)
        join rooms r on (s.RoomId=r.RoomId)
        join projector p on (r.RoomId = p.ProjectorId)
        where s.ScreeningId= ${id};`).then((res) => {
            resolve(res);
        })
    })
}