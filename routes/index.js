var express = require('express');
var router = express.Router();


/* GET home page. */
var x = 0
while (x< 12)
{
    x = x+ 5
}
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ae2', count: datas});
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
router.get('/loading', function(req, res, next) {
  res.render('load', { title: 'Messages', count: x});
});
const net = require('net');
var datas = ""

function Fetchr()
{
x = x*2   
}



//server.listen(9000, () => {
 //   console.log('server socket listening ...');
//});

setInterval(Fetchr, 500);
module.exports = router;
