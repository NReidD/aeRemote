var express = require('express');
var router = express.Router();

router.get('/task', function(req, res, next) {
    res.render('taskManager', { title: 'Task Manager', count: x});
  });
 
function msg()
{
    
}
module.exports = router;
