const express = require("express");
const path = require("path");
const port = 3333;

var statusRouter = require("./routes/statusRouter");

var app = express();
var status = "Free";
app.set("status", status);

app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res) {
    res.sendFile("./index.html");
});

app.use("/api/getStatus", statusRouter);

app.listen(port, function() {
    console.log("Listening to port: " + port);
});

module.exports = app;