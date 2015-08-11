//店铺样板 开店指南
var http = require('http');

//装修开店 创建自己的服务器
var server = http.createServer();
// 请求 响应
function parse(query){
    var obj = {}, reg = /([^?=&]+)=([^?=&]+)/g;
    query.replace(reg, function () {
        var cur = arguments;
        obj[cur[1]] = cur[2];
    });
    return obj;
}
//服务员
var wait = function(request,response){
    // http://localhost:8080/rice?num=2&age=6
    var urls = request.url.split('?');
    var path  = urls[0];
    var query = urls[1];// num=2&age=6   {num:2,age:6}
    response.setHeader('Content-Type','text/html;charset=utf-8');
    if(path == '/rice'){
        var queryObj = parse(query);
        response.end(queryObj['num']+'米饭');
    }else if(path == '/fish'){
        response.end('鱼香肉丝');
    }else if(path == '/chicken'){
        response.end('宫爆鸡丁');
    }else if(path == '/'){
        
    }

}
//当有客户端连接到来的时候，调用wait函数
server.addListener('request',wait);
//开门营业
server.listen(8080,'localhost');