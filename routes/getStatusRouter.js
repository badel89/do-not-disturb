const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
    let status = req.app.get("status");
    res.statusCode = 200;
    res.send(status);
});

module.exports = router;