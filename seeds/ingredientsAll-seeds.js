const { IngredientsAll } = require('../models');

const ingredientsAllData = [
//Recipe 2
  {
    recipe_id: 2,
    quantity_id: 6,
    unit_id: 1,
    ingredient_id: 1,
  },
  {
    recipe_id: 2,
    quantity_id: 13,
    unit_id: 2,
    ingredient_id: 2,
  },
  {
    recipe_id: 2,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 3,
  },
  {
    recipe_id: 2,
    quantity_id: 36,
    unit_id: 3,
    ingredient_id: 4,
  },
  {
    recipe_id: 2,
    quantity_id: 18,
    unit_id: 6,
    ingredient_id: 5,
  },
  {
    recipe_id: 2,
    quantity_id: 24,
    unit_id: 1,
    ingredient_id: 6,
  },
  {
    recipe_id: 2,
    quantity_id: 3,
    unit_id: 2,
    ingredient_id: 7,
  },
  {
    recipe_id: 2,
    quantity_id: 3,
    unit_id: 2,
    ingredient_id: 8,
  },
  {
    recipe_id: 2,
    quantity_id: 3,
    unit_id: 1,
    ingredient_id: 3,
  },
  {
    recipe_id: 2,
    quantity_id: 1,
    unit_id: 1,
    ingredient_id: 9,
  },
  {
    recipe_id: 2,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 10,
  },
  {
    recipe_id: 2,
    quantity_id: 36,
    unit_id: 3,
    ingredient_id: 4,
  },
  {
    recipe_id: 2,
    quantity_id: 24,
    unit_id: 3,
    ingredient_id: 4,
  },
  {
    recipe_id: 2,
    quantity_id: 24,
    unit_id: 4,
    ingredient_id: 11,
  },
  {
    recipe_id: 2,
    quantity_id: 2,
    unit_id: 1,
    ingredient_id: 12,
  },
  {
    recipe_id: 2,
    quantity_id: 15,
    unit_id: 1,
    ingredient_id: 13,
  },
  {
    recipe_id: 2,
    quantity_id: 12,
    unit_id: 2,
    ingredient_id: 14,
  },

//Recipe 2
  {
    recipe_id: 1,
    quantity_id: 24,
    unit_id: 6,
    ingredient_id: 15,
  },
  {
    recipe_id: 1,
    quantity_id: 12,
    unit_id: 3,
    ingredient_id: 16,
  },
  {
    recipe_id: 1,
    quantity_id: 6,
    unit_id: 6,
    ingredient_id: 17,
  },
  {
    recipe_id: 1,
    quantity_id: 12,
    unit_id: 6,
    ingredient_id: 18,
  },
  {
    recipe_id: 1,
    quantity_id: 6,
    unit_id: 7,
    ingredient_id: 19,
  },
  {
    recipe_id: 1,
    quantity_id: 24,
    unit_id: 3,
    ingredient_id: 20,
  },
  {
    recipe_id: 1,
    quantity_id: 12,
    unit_id: 1,
    ingredient_id: 21,
  },
  {
    recipe_id: 1,
    quantity_id: 18,
    unit_id: 1,
    ingredient_id: 22,
  },
  {
    recipe_id: 1,
    quantity_id: 24,
    unit_id: 4,
    ingredient_id: 28,
  },
  {
    recipe_id: 1,
    quantity_id: 6,
    unit_id: 8,
    ingredient_id: 23,
  },
  {
    recipe_id: 1,
    quantity_id: 3,
    unit_id: 1,
    ingredient_id: 24,
  },
  {
    recipe_id: 1,
    quantity_id: 3,
    unit_id: 1,
    ingredient_id: 25,
  },
  {
    recipe_id: 1,
    quantity_id: 3,
    unit_id: 1,
    ingredient_id: 26,
  },
  {
    recipe_id: 1,
    quantity_id: 18,
    unit_id: 6,
    ingredient_id: 27,
  },


  //Recipe 3
  {
    recipe_id: 3,
    quantity_id: 12,
    unit_id: 7,
    ingredient_id: 29,
  },
  {
    recipe_id: 3,
    quantity_id: 18,
    unit_id: 3,
    ingredient_id: 30,
  },
  {
    recipe_id: 3,
    quantity_id: 18,
    unit_id: 3,
    ingredient_id: 31,
  },
  {
    recipe_id: 3,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 32,
  },
  {
    recipe_id: 3,
    quantity_id: 12,
    unit_id: 2,
    ingredient_id: 33,
  },
  {
    recipe_id: 3,
    quantity_id: 6,
    unit_id: 1,
    ingredient_id: 34,
  },
  {
    recipe_id: 3,
    quantity_id: 36,
    unit_id: 3,
    ingredient_id: 16,
  },
  {
    recipe_id: 3,
    quantity_id: 12,
    unit_id: 6,
    ingredient_id: 35,
  },
  {
    recipe_id: 3,
    quantity_id: 24,
    unit_id: 6,
    ingredient_id: 18,
  },
  {
    recipe_id: 3,
    quantity_id: 18,
    unit_id: 3,
    ingredient_id: 20,
  },
  {
    recipe_id: 3,
    quantity_id: 12,
    unit_id: 1,
    ingredient_id: 19,
  },
  {
    recipe_id: 3,
    quantity_id: 12,
    unit_id: 6,
    ingredient_id: 36,
  },
  {
    recipe_id: 3,
    quantity_id: 48,
    unit_id: 4,
    ingredient_id: 37,
  },
];

const seedIngredientsAll = () => IngredientsAll.bulkCreate(ingredientsAllData);

module.exports = seedIngredientsAll;
