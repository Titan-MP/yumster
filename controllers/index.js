const router = require('express').Router();
const apiRoute = require('./api');
const homeRoute = require('./homeroute');

router.use('/api', apiRoute);
router.use('/', homeRoute);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;