const router = require('express').Router();
const { Recipe , IngredientsAll } = require('/models');


router.get('/', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      include: [
        {
          model: IngredientsAll,
          attributes: ['unit_id', 'quantity_id', 'ingredient_id'],
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