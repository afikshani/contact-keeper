const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Register a user');
});


router.post('/', (req, res) => {
    res.send('Log in user');
});


module.exports = router;