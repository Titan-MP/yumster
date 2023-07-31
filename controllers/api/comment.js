const router = require('express').Router();
const { Recipe, /*Comment*/ } = require('../../models');


/* Get all comments */
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
});

/* Get all comments for a recipe */
router.get('/', (req, res) => {
    Comment.findAll({
        where: {
            recipe_id: req.query.recipe_id
        },
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
});

/* Make a new comment */
router.post('/', async (req, res) => {
  try {
    const dbCommentData = await Comment.create({
        comment_text: req.body.comment_text,
        recipe_id: req.body.recipe_id,
        username: req.body.username
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbCommentData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});