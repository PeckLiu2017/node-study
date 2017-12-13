// 定义一个 Web 应用实例，并且启动它
var express = require('express');
var app = express();

// 定义一个端口
var port = process.env.PORT || 8080;
// 定义一个路由
var router = express.Router();

router.get('/', function (req, res) {
  res.send('<h1>Hello World</h1>');
});

// 无论是 http://localhost:8080 还是 http://localhost:8080/home 都可以返回 <h1>Hello World</h1>
app.use('/home',router);

app.listen(port);
console.log('Magic happens on port ' + port);
