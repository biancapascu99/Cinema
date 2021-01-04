var express = require('express');
var scheduleController = require('../controllers/scheduleController')
var movieController = require('../controllers/movieController')
var reservationController = require('../controllers/reservationController');
var roomController = require('../controllers/roomController')
var ticketController = require('../controllers/ticketController')


var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/schedule', function(req, res) {
    scheduleController.readSchedule().then((queryResponse) => {
        res.send(queryResponse)
    })
})

router.get('/details/:id', function(req, res) {
    var id = req.params.id;
    movieController.readMovieDetails(id).then((queryResponse) => {
        res.send(queryResponse)
    })
})

router.get('/reservation/:id', function(req, res) {
    var id = req.params.id;
    reservationController.readReservationDetails(id).then((queryResponse) => {
        res.send(queryResponse)
    })
})

router.get('/showRooms', function(req, res) {
    roomController.readRooms().then((queryResponse) => {
        res.send(queryResponse)
    })
})

router.get('/showMovies', function(req, res) {
    movieController.readMovies().then((queryResponse) => {
        res.send(queryResponse)
    })
})

router.get('/showTickets', function(req, res) {
    ticketController.readTickets().then((queryResponse) => {
        res.send(queryResponse)
    })
})

router.post('/reservation', function(req, res) {
    reservationController.addReservations(req).then((queryResponse) => {
        res.send(queryResponse)

    })
})

router.post('/addMovie', function(req, res) {
    movieController.addMovie(req).then((queryResponse) => {
        res.send(queryResponse)

    })
})

router.post('/addScreening', function(req, res) {
    scheduleController.addSchedule(req).then((queryResponse) => {
        res.send(queryResponse)
    })
})

router.get('/deleteMovie/:id', function(req, res) {
    var id = req.params.id;
    movieController.deleteMovie(id).then((queryResponse) => {
        res.send(queryResponse)
    })
})

router.post('/addRoom', function(req, res) {
    roomController.addRoom(req).then((queryResponse) => {
        res.send(queryResponse)
    })
})



module.exports = router;