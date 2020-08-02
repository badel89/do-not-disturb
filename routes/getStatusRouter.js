const express = require("express");
const router = express.Router();

// Make it a GET request
router.get("/", function (req, res, next) {
    let status = req.app.get("status");
    let color = req.app.get("color");
    // Code 200 for OK
    res.statusCode = 200;
    // Send results back to frontend
    res.send(JSON.stringify({ "status": status, "color": color }));
});

module.exports = router;
