var express = require('express');
var router = express.Router();
var jquery = require('jQuery');

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
const net = require('net');
var datas = ""

const server = net.createServer((c) => {
    console.log('client connected');
    c.on('end', () => {
        console.log('client disconnected');
    });
    c.setDefaultEncoding('utf-8')
    c.on('data', (data) => {
      console.log(data)
datas = data
    })
    c.write('hello\r\n');
    c.pipe(c);
});

server.listen(9000, () => {
    console.log('server socket listening ...');
});
function Fetchr()
{
x = x*2   
}
setInterval(Fetchr, 500);
module.exports = router;
