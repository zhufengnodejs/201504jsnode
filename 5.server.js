var http = require('http');
var fs = require('fs');
var util = require('./util.js');
var users = [];
http.createServer(function(request,response){
  var urls = request.url.split('?'); //
  var pathname = urls[0];
  var query = urls[1]?urls[1]:'';
  if(pathname == '/'){
      fs.readFile('./form.html','utf8',function(err,data){
          response.end(data);
      })
  }else if(pathname == '/addUser'){
      var queryObj = util.parse(query);
      users.push(queryObj);
  }else{
      response.end('404');
  }

}).listen(8080);

