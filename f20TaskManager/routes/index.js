var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { message: 'Welcome to the Dhillon familys Home Page' });
});

router.get('/jasbir', function (req, res, next) {
    res.render('Jasbir', {
        message: 'Jasbir Singh is retired now living in India.He used to own a convenience store in New york.'});
    });

router.get('/sandip', function (req, res, next) {
    res.render('Sandip', {
        message: 'Sandip Kaur is a Home Maker. She looks after her kids. She is an amazing cook.'
    });
});

router.get('/diljot', function (req, res, next) {
    res.render('Diljot', {
        message: 'Diljot Singh is taking computer prgramming at Georgian College. He is from India. He is looking for co-op'
    });
});

router.get('/harjot', function (req, res, next) {
    res.render('Harjot', {
        message: 'Harjot Singh is a recnt graduate from High School. He is planning on coming to canada soon'
    });
});

module.exports = router;
