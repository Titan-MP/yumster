const router = require('express').Router();
const { Recipe , IngredientsAll } = require('../../models');

//Get all recipes *//
router.get('/', async (req, res) => {
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

    res.render('homepage', {
      recipes,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Get single recipe by id *//
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
          },
        ],
      });
      const aRecipe = recipe.get({ plain: true });
      res.render('recipePage', { aRecipe, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

module.exports = router;