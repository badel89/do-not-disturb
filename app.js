const express = require("express");
const path = require("path");
const port = 3333;

var getStatusRouter = require("./routes/getStatusRouter");
var setStatusRouter = require("./routes/setStatusRouter");

var app = express();

var status = "Free";
var color = "#32CD32";
app.set("status", status);
app.set("color", color);

app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res) {
    res.sendFile("./index.html");
});

app.use("/api/getStatus", getStatusRouter);
app.use("/api/setStatus", setStatusRouter);


app.listen(port, function() {
    console.log("Listening to port: " + port);
});

module.exports = app;