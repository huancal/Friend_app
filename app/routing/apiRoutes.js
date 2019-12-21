const express = require('express');
const router = express.Router();

let friends = require('../data/friend');

router.get('/', (req, res) => {
    res.send(friends);
});

router.post('/', (req, res) => {
    // new submit

    var newSubmission = req.body;

    var bestMatch = {};

    var minDifference = 100;



    for (var i = 0; i < friends.length; i++) {

        var totalDifference = 0;

        var currentFriend = friends[i];


        for (var j = 0; j < currentFriend.scores.length; i++) {
            totalDifference += Math.abs(parseInt(newSubmission.scores[j]) - parseInt(currentFriend.scores[j]));

        };

        if (totalDifference <= minDifference) {
            bestMatch = currentFriend;
            minDifference = totalDifference;
        };
    }

    friends.push(newSubmission);

    res.json(bestMatch);


    // 

});


module.exports = router;