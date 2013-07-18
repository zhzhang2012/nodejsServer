var http = require("http");
var url = require("url");
var lessonData = require("./data.json");

function start(handle,route) {
  function onRequest(request, response) {
    console.log("Request received.");
    
    var pathname = url.parse(request.url).pathname;
    route(handle,pathname,response);
    
    request.addListener("data",function(choice){
    	console.log(choice);
    });
 
  }

  http.createServer(onRequest).listen(3000);
  console.log("Server has started.");
}

exports.start = start;