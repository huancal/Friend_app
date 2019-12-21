const express = require('express');
const router = express.Router();

let friends = require('../data/friend');

router.get('/', (req, res) => {
    res.json(friends);
});

router.post('/', (req, res) => {

    var newSubmission = req.body.scores;
    var scoresArr = [];
    var bestMatch = 0;

    for (var i = 0; i < friends.length; i++) {

        var totalDifference = 0;


        for (var j = 0; j < newSubmission.length; i++) {
            totalDifference += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newSubmission[j])));

        };

        scoresArr.push(totalDifference);
    }

    for (var i = 0; i < scoresArr.length; i++) {
        if (scoresArr[i] <= scoresArr[bestMatch]) {
            bestMatch = i;
        }
    }

    var totalMatch = friends[bestMatch];
    res.json(totalMatch);

    friends.push(req.body);

});


module.exports = router;