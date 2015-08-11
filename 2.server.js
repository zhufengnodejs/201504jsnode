//店铺样板 开店指南
var http = require('http');
//装修开店 创建自己的服务器
var server = http.createServer();
// 请求 响应
//服务员
var wait = function(request,response){
    response.write('welcome');
    response.write('sir');//向客人说话
    response.end();//结束
}
//当有客户端连接到来的时候，调用wait函数
server.addEventListener('request',wait);
//开门营业
server.listen(8080,'localhost');