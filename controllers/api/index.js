const router = require('express').Router();

                                                                /* App currently only runs if this is commented out     */
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
