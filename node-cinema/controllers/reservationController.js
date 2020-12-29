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

exports.addReservations = async function(request) {
    return new Promise((resolve, reject) => {
        let queryString = `INSERT INTO Tickets (UserId, ScreeningId, ticket_seat) VALUES`
        for (let ticket of request.body.tickets) {
            queryString += `(${request.body.userId}, ${request.body.screeningId}, ${ticket}),`
        }
        queryString = queryString.substring(0, queryString.length - 1) + ';'
        db.executeQuery(queryString).then((res) => {
            resolve(res);
        })

    })
}