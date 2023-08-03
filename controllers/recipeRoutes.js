                                                                /* ===================== IMPORTS ====================== */
const router = require("express").Router();                     /* Import express.Router()                              */
const { Recipe , IngredientsAll } = require('../models');
// const withAuth = require("../utils/auth");                   // TODO: Uncomment when withAuth is needed


                                                                /* ====================== ROUTES ====================== */
router.get("/", async (req, res) => {                           /* Render recipe.handlebars with main.handlebars layout */
    try {
        res.render("recipe", { layout: "main" })
    } 
    catch (err) {
        res.status(500).json(err);
    }
});

router.get(':id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the recipes section
    try {
      const recipeData = await Recipe.findByPk(req.params.id, {
        include: [
        {
          model: IngredientsAll,
          attributes: [
            'unit_id',
            'quantity_id',
            'ingredient_id'
            ],
          model: Comment,
          attributes: [
            'id',
            'comment_text',
            'post_id',
            'user_id',
            'created_at',
          ],
          },
        ],
      });
      const aRecipe = recipeData.map((recipe) =>
      recipe.get({ plain: true })
    );
        res.render('recipe',
            {
                aRecipe,
                loggedIn: req.session.loggedIn
            });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});


                                                                /* ===================== EXPORTS ====================== */
module.exports = router;
