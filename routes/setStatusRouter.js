const express = require("express");
const router = express.Router();

// Make it a POST request
router.post("/", function(req, res, next) {
    // Set status
    req.app.set("status", req.body.status);
    req.app.set("color", req.body.color);
    res.statusCode = 200;
    res.send("OK");
});

module.exports = router;