const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { layout: 'layouts/main' });
});

router.get('/about', (req, res) => {
    res.render('about', { layout: 'layouts/main' });
});

module.exports = router;

