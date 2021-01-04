var db = require('../Database');

exports.addRoom = async function(request) {
    return new Promise((resolve, reject) => {
        db.executeQuery(`insert into projector (projector_type)
        values ("${request.body.projectorType}");`).then((res) => {
            db.executeQuery(`insert into rooms (room_name, room_capacity, projectorId)
            values ("${request.body.number}", ${request.body.capacity}, ${res.insertId})`).then((res2) => {
                resolve(res2);
            })

        })
    })
}

exports.readRooms = async function() {
    return new Promise((resolve, reject) => {
        db.executeQuery(`SELECT r.RoomId,r.room_name, r.room_capacity,p.projector_type FROM rooms r
        join projector p on (p.ProjectorId = r.ProjectorId)
        order by 1 desc;
       `).then((res) => {
            resolve(res);
        })
    })
}