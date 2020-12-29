var db = require('../Database');

exports.addRoom = async function(request) {
    return new Promise((resolve, reject) => {
        db.executeQuery(`insert into projector (projector_type)
        values ("${request.body.projectorType}");`).then((res) => {
            db.executeQuery(`insert into rooms (room_capacity, projectorId)
            values (${request.body.capacity}, ${res.insertId})`).then((res2) => {
                resolve(res2);
            })

        })
    })
}