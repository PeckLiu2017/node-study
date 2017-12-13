var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 8080;
var router = express.Router();

// 增加中间件, 这里的 next() 代表下一个中间件，表示将处理过的请求传递给下一个中间件
router.use(function(req,res,next) {
  console.log('There is a requesting.');
  next();
});

// 增加中间件, 显示当前时间
router.use(function(req,res,next) {
  console.log((new Date()));
  next();
});

router.get('/', function(req, res) {
  res.send('<h1>Hello World</h1>');
});

router.get('/:name', function(req, res) {
  res.send('<h1>Hello ' + req.params.name + '</h1>');
});

router.post('/', function (req, res) {
  var name = req.body.name;
  res.json({message: 'Hello ' + name});
});

app.use('/home', router);

app.listen(port);
console.log('Magic happens on port ' + port);
