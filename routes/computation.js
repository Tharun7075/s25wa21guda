var express = require('express');
var router = express.Router();

/* GET computation page */
router.get('/', function(req, res, next) {
    let x;

    // Check if query parameter 'x' is provided, otherwise generate a random number
    if (req.query.x) {
        x = parseFloat(req.query.x);
    } else {
        x = Math.random() * 100;  // Generate a random number between 0-100
    }

    let y = Math.log(x);  // Apply Math.log() function

    res.send(`log applied to ${x} is ${y}`);
});

module.exports = router;
