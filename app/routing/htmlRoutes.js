const express = require('express');
const router = express.Router();
const path = require('path');

router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'))
});

router.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/survey.html'))
});

module.exports = router;