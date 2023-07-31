const router = require('express').Router();

                                                                /* App currently only runs if this is commented out     */
                                                                // TODO: Finish recipes route implementation
const recipesRoute = require('./recipes')
const userRoute = require('./user')


router.use('/recipes', recipesRoute);
router.use('/user', userRoute);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
