const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Register a user');
});



router.delete('/', (req, res) => {
    res.send('Register a user');
});



router.post('/', (req, res) => {
    res.send('Register a user');
});



router.put('/:id', (req, res) => {
    res.send('updated contacs');
});


module.exports = router;