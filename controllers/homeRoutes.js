                                                                /* ===================== IMPORTS ====================== */
const router = require("express").Router();                     /* Import express.Router()                              */
const { Recipe , IngredientsAll } = require('../models');
// const withAuth = require("../utils/auth");                   // TODO: Uncomment when withAuth is needed


                                                                /* ====================== ROUTES ====================== */
router.get("/", async (req, res) => {                           /* Render home.handlebars with main.handlebars layout   */

    const recipesByCategory = {};

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

    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

    recipes.forEach((recipe) => {
      if (!recipesByCategory[recipe.category_id]) {
        recipesByCategory[recipe.category_id] = [];
      }
      recipesByCategory[recipe.category_id].push(recipe);
    });

    const breakfastRecipes = recipesByCategory[1];
    const lunchRecipes = recipesByCategory[2];
    const dinnerRecipes = recipesByCategory[3];
    const snackRecipes = recipesByCategory[4]; 
    
    res.render('home', {
      breakfastRecipes,
      lunchRecipes,
      dinnerRecipes,
      snackRecipes
    });
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


                                                                /* ===================== EXPORTS ====================== */
module.exports = router;
