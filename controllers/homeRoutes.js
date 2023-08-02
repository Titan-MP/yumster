                                                                /* ===================== IMPORTS ====================== */
const router = require("express").Router();                     /* Import express.Router()                              */
const { Recipe , IngredientsAll } = require('../../models');
// const withAuth = require("../utils/auth");                   // TODO: Uncomment when withAuth is needed


                                                                /* ====================== ROUTES ====================== */
router.get("/", async (req, res) => {                           /* Render home.handlebars with main.handlebars layout   */
    try {
    const recipeData = await Recipe.findAll({
      include: [
        {
          model: IngredientsAll,
          attributes: [
            'unit_id',
            'quantity_id',
            'ingredient_id'
          ],
        },
      ],
    });

    const recipes = recipeData.map((recipe) =>
      recipe.get({ plain: true })
    );

    res.json(recipes);

    res.render('homepage', {
      recipes,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


                                                                /* ===================== EXPORTS ====================== */
module.exports = router;
