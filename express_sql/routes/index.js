var express = require('express');
var router = express.Router();
var db = require("../config/db"); //引入数据库封装模块

/* GET home page. */
router.get('/', function(req, res, next) {

  //查询users表
  db.query("SELECT * FROM stu",[],function(results,fields){
    
    res.render('index', { title: results[1].name });
    console.log(results);
    console.log(1)
  })
  
});
router.get("/user",function
(req,res,next){
  res.json('hello')
})
router.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
module.exports = router;
