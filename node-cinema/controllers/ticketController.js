var db = require('../Database');

exports.readTickets = async function(request) {
    console.log(request)
    return new Promise((resolve, reject) => {
        db.executeQuery(`SELECT t.TicketId, m.movie_title, s.screening_date,m.movie_duration ,r.RoomId,t.ticket_seat 
        from tickets t join screening s ON (t.ScreeningId = s.ScreeningId)
        join movies m on (s.MovieId = m.MovieId) 
        join rooms r on (r.RoomId = s.RoomId)
        WHERE UserId=${request}
        order by 1 desc;
       `).then((res) => {
            resolve(res);
        })
    })
}