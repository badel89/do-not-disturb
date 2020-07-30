const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
    // set status.
    
    res.statusCode = 200;
    res.send(status);
});

module.exports = router;