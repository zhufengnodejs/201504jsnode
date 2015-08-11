var http = require('http');
var fs = require('fs');
var util = require('./util/util.js');
var users = [];//存放所有的用户
http.createServer(function(request,response){
  var urls = request.url.split('?'); //
  var pathname = urls[0];
  var query = urls[1]?urls[1]:'';
  if(pathname == '/'){
      fs.readFile('./post.html','utf8',function(err,data){
          response.end(data);
      })
  }else if(pathname == '/addUser'){
      var msg = '';
      request.on('data',function(data){
          msg+=data.toString();
      });
      request.on('end',function(){
          var userObj = util.parse(msg);
          users.push(userObj);
          response.end(JSON.stringify(users));
      });

  }else{
      response.end('404');
  }

}).listen(8080);

