var express = require('express');
var scheduleController = require('../controllers/scheduleController')
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

module.exports = router;