const router = require('express').Router();
const { Recipe , IngredientsAll } = require('../../models');

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
      const aRecipe = recipe.get({ plain: true });
      res.render('recipePage', { aRecipe, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});




/////////////////////////MAY OR MAY NOT USE///////////////////////////////////////
router.post('/', async (req, res) => {
  try { 
    const recipeData = await Recipe.create({
    recipe_name: req.body.recipe_name,
    description: req.body.description,
    instructions: req.body.instructions,
    source: req.body.source,
  });
  // if the recipe is successfully created, the new response will be returned as json
  res.status(200).json(recipeData)
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;