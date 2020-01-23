// my node start point

var express = require("express");
var http = require("http");
const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 }
];
/* ORDERED BY DATE */

function byDate(a, b) {
  const bandA = a.year;
  const bandB = b.year;

  let byDate = 0;
  if (bandA > bandB) {
    byDate = 1;
  } else if (bandA < bandB) {
    byDate = -1;
  }
  return byDate;
}
var lastarray = movies.sort(byDate);

/* by rating */
function byRate(a, b) {
  const bandA = a.rating;
  const bandB = b.rating;

  let byRate = 0;
  if (bandA < bandB) {
    byRate = 1;
  } else if (bandA > bandB) {
    byRate = -1;
  }
  return byRate;
}
var lastbyRate = movies.sort(byRate);
/* by rating */
function byTitle(a, b) {
  const bandA = a.title;
  const bandB = b.title;

  let byTitle = 0;
  if (bandA < bandB) {
    byTitle = 1;
  } else if (bandA > bandB) {
    byTitle = -1;
  }
  return byTitle;
}
var lastbyTitle = movies.sort(byTitle);
console.log(lastbyTitle);

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
app.get("/search=:Se?", (req, res) => {
  if (req.params.Se != undefined) {
    res.send({ status: 200, message: `ok`, data: req.params.Se });
  } else {
    res.send({
      status: 500,
      error: true,
      message: "you have to provide a search"
    });
  }
});

app.get("/movies/create", (req, res) => {
  res.send();
});
app.get("/movies/read", (req, res) => {
  res.send({ status: 200, data: movies });
});
app.get("/movies/update", (req, res) => {
  res.send();
});
app.get("/movies/delete", (req, res) => {
  res.send();
});
app.get("/movies/read/by-date", (req, res) => {
  res.send({ status: 200, data: lastarray });
});
app.get("/movies/read/by-rating", (req, res) => {
  res.send({ status: 200, data: lastbyRate });
});
app.get("/movies/read/by-title", (req, res) => {
  res.send({ status: 200, data: lastbyTitle });
});
var server = http.createServer(app);
server.listen(port, () => {
  console.log("Server is starting = " + port);
});
