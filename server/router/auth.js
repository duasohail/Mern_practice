const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('hello  welcome to MERN STACK Home router.js');
});

module.exports = router;