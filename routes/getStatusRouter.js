const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
    let status = req.app.get("status");
    let color = req.app.get("color");
    res.statusCode = 200;
    res.send(JSON.stringify({ "status": status, "color": color }));
});

module.exports = router;
