const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res) => {
    res.render('users/signin', { layout: 'layouts/main' });
});

router.get('/users/signup', (req, res) => {
    res.render('users/signup', { layout: 'layouts/main' });
});

module.exports = router;