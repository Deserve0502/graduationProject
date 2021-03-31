var http = require('http');
var server = http.createServer();
//当客户端发起response请求当时候  会调用后面的函数
server.on('response',function(req,res){
//res 这一次请求是谁请求的 请求的方式是什么 请求的时间 都放在第一个请求参数里面
//服务器端给客户端响应的数据 如何响应 响应什么
if(req.method === 'GET'){
    console.log('get请求')
}else if(req.method === 'POST'){
    console.log('post请求')
}
res.end();
})