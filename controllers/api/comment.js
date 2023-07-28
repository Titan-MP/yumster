const router = require('express').Router();
const { Recipe, /*Comment*/ } = require('../../models');


router.get('/', (req, res) => {
    Comment.findAll({
        attributes: [
            "id",
            "comment_text",
            "recipe_id",
            "username",
            "created_at"
        ]
    })
        .then(commentData => {
        const comments = dbcommentData.map(post => Comment.get({ plain: true }));

        res.render('homepage', {
            comments,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})