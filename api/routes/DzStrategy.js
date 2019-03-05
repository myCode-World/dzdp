const express = require('express');
const router = express.Router();

const DzStrategyData = require("../data/DzStrategyData");

/* GET home page. */
router.get('/', function(req, res, next) {

    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");

  res.send(DzStrategyData);
});

module.exports = router;
