const express = require("express");
const router = express.Router();

router.post("/", function(req, res, next) {
    // set status.
    req.app.set("status", req.body.status);
    req.app.set("color", req.body.color);
    res.statusCode = 200;
    res.send("OK");
});

module.exports = router;