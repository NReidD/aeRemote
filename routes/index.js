var express = require('express');
var router = express.Router();
var cpujs = require('./cpuManager')
var servSide = require('../serverside')
/* GET home page. */
var x = 0
while (x< 12)
{
    x = x+ 5
}
router.get('/', async function(req, res, next) {

  res.render('index', { title: 'Ae2', count: x});
});
router.get('/data', function(req, res, next) {
  res.render('data', { title: 'DataSheet', count: x});
});
router.get('/task', function(req, res, next) {
  res.render('task', { title: 'Task Manager', count: x});
});
router.get('/cpu', function(req, res, next) {
  res.render('cpu', { title: 'CPU', count: x});

});
router.get('/msg', function(req, res, next) {
  res.render('msg', { title: 'Messages', count: x});
});
router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Messages', count: x});
});

function Fetchr()
{
x = x*2   
}
setInterval(Fetchr, 500);
module.exports = router;
