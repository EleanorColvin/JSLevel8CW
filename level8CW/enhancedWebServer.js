// Eleanor Colvin Web Dev pd. 7/8 odd 
var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function(request, response)
{
    var pathname = url.parse(request.url).pathname.substring(1);
    console.log("Request for " + pathname + " recieved.");
    fs.readFile(pathname, function(err, data)
    {
        if(err)
        {
            console.log(err);
            response.writeHead(404, {"Content-Type": "test/html"});
        }
        else
        {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(data.toString());
        }
        response.end();
    });
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081");