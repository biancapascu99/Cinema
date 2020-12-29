var express = require('express');
var scheduleController = require('../controllers/scheduleController')
var movieDetailsController = require('../controllers/movieDetailsController')
var reservationDetailsController = require('../controllers/reservationDetailsController');
var addReservationsController = require('../controllers/addReservationController')

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
    movieDetailsController.readMovieDetails(id).then((queryResponse) => {
        res.send(queryResponse)
    })
})

router.get('/reservation/:id', function(req, res) {
    var id = req.params.id;
    reservationDetailsController.readReservationDetails(id).then((queryResponse) => {
        res.send(queryResponse)
    })
})

router.post('/reservation', function(req, res) {
    addReservationsController.addReservations(req).then((queryResponse) => {
        res.send(queryResponse)

    })
})

module.exports = router;