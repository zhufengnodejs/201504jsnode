//店铺样板 开店指南
var http = require('http');
var menu = '<ul><li><a href="/rice">米饭</a></li> <li><a href="/fish">鱼香肉丝</a></li></li> <li><a href="/chicken">宫爆鸡丁</a></li> </ul>';
//装修开店 创建自己的服务器
var server = http.createServer();
// 请求 响应
//服务员
var wait = function(request,response){
    response.setHeader('Content-Type','text/html;charset=utf-8');
    response.end(menu);//结束
}
//当有客户端连接到来的时候，调用wait函数
server.addListener('request',wait);
//开门营业
server.listen(8080,'localhost');