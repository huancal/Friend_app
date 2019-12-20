const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('testing api route')
});




module.exports = router;