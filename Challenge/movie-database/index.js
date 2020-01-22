// my node start point

var express = require("express");
var http = require("http");

var port = 3000;
var app = express();
function TIME() {
  var TIME = new Date();
  var TIME = TIME.getHours() + ":" + TIME.getSeconds();
  return TIME;
}
TIME();
// set your first route
app.get("/", (req, res) => {
  res.send("Hello Nodemon!");
});
app.get("/test", (req, res) => {
  res.send({ status: 200, message: "ok" });
});
app.get("/time", (req, res) => {
  res.send({ status: 200, message: TIME() });
});
app.get("/hello/:Id", (req, res) => {
  res.send({ status: 200, message: "Hello, " + req.params.Id });
});
app.get("/search/:Se?", (req, res) => {
  if (req.params.Se != undefined) {
    res.send({ status: 200, message: "ok, ", data: req.params.Se });
  } else {
    res.send({
      status: 500,
      error: true,
      message: "you have to provide a search"
    });
  }
});
var server = http.createServer(app);
server.listen(port, () => {
  console.log("Server is starting = " + port);
});
