var db = require('../Database');

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