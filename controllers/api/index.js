const router = require('express').Router();
const recipesRoute = require('./recipes')
const userRoute = require('./user')
const commentRoute = require('./comment')


router.use('/recipes', recipesRoute);
router.use('/user', userRoute);
router.use('/comment', commentRoute);


router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
