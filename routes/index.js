var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var date = new Date();
  var time = date.getTime();
  res.render('index', { title: time });
});

router.post('/hello', function(req,res,next){
	res.set('Content-Type', 'text/plain');
	res.send('universe');
})

module.exports = router;
