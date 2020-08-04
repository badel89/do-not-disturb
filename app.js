// Import required packages
const express = require("express");
const path = require("path");

// Set the server port
const port = 3333;

// Setup required routes
var getStatusRouter = require("./routes/getStatusRouter");
var setStatusRouter = require("./routes/setStatusRouter");

// Init server
var app = express();

// Set some initial variables
var status = "Free";
var color = "#33ff33";
app.set("status", status);
app.set("color", color);

app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Default page
app.get('/', function(req, res) {
    res.sendFile("./index.html");
});

// Install required routes
app.use("/api/getStatus", getStatusRouter);
app.use("/api/setStatus", setStatusRouter);

// Start server
app.listen(port, function() {
    console.log("Listening to port: " + port);
});

module.exports = app;