var http = require("http");
var fs = require("fs");
console.log(__dirname);
//create a server object:
http
  .createServer(function(req, res) {
    if (req.url === "/data.json") {
      res.writeHead(200, {
        "Content-type": "application/json"
      });
      var json = fs.readFileSync(__dirname + "/data.json", "utf8");
      return res.end(json);
    }
    res.writeHead(200, {
      "Content-type": "text/html"
    });

    var html = fs.readFileSync(__dirname + "/layout.html", "utf8");

    res.end(html); //end the response
  })
  .listen(8080); //the server object listens on port 8080
