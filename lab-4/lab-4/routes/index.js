var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/digvijay', function(req, res, next) {
    res.render('digvijay');
});
router.get('/harshita', function(req, res, next) {
    res.render('harshita');
});
router.get('/rajkumar', function(req, res, next) {
    res.render('rajkumar');
});
router.get('/ramesh', function(req, res, next) {
    res.render('ramesh');
});
module.exports = router;
