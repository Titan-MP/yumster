const router = require('express').Router();
const recipesRoute = require('./recipes')

router.use('/recipes', recipesRoute);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;