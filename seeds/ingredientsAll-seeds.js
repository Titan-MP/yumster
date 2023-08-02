const { IngredientsAll } = require('../models');

const ingredientsAllData = [
//Recipe 2
  {
    id: 1,
    recipe_id: 2,
    quantity_id: 6,
    unit_id: 1,
    ingredient_id: 1,
  },
  {
    id: 2,
    recipe_id: 2,
    quantity_id: 13,
    unit_id: 2,
    ingredient_id: 2,
  },
  {
    id: 3,
    recipe_id: 2,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 3,
  },
  {
    id: 4,
    recipe_id: 2,
    quantity_id: 36,
    unit_id: 3,
    ingredient_id: 4,
  },
  {
    id: 5,
    recipe_id: 2,
    quantity_id: 18,
    unit_id: 6,
    ingredient_id: 5,
  },
  {id: 6,
    recipe_id: 2,
    quantity_id: 24,
    unit_id: 1,
    ingredient_id: 6,
  },
  {
    id: 7,
    recipe_id: 2,
    quantity_id: 3,
    unit_id: 2,
    ingredient_id: 7,
  },
  {
    id: 8,
    recipe_id: 2,
    quantity_id: 3,
    unit_id: 2,
    ingredient_id: 8,
  },
  {
    id: 9,
    recipe_id: 2,
    quantity_id: 3,
    unit_id: 1,
    ingredient_id: 3,
  },
  {
    id: 10,
    recipe_id: 2,
    quantity_id: 1,
    unit_id: 1,
    ingredient_id: 9,
  },
  {
    id: 11,
    recipe_id: 2,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 10,
  },
  {
    id: 12,
    recipe_id: 2,
    quantity_id: 36,
    unit_id: 3,
    ingredient_id: 4,
  },
  {
    id: 13,
    recipe_id: 2,
    quantity_id: 24,
    unit_id: 3,
    ingredient_id: 4,
  },
  {
    id: 14,
    recipe_id: 2,
    quantity_id: 24,
    unit_id: 4,
    ingredient_id: 11,
  },
  {
    id: 15,
    recipe_id: 2,
    quantity_id: 2,
    unit_id: 1,
    ingredient_id: 12,
  },
  {
    id: 16,
    recipe_id: 2,
    quantity_id: 15,
    unit_id: 1,
    ingredient_id: 13,
  },
  {
    id: 17,
    recipe_id: 2,
    quantity_id: 12,
    unit_id: 2,
    ingredient_id: 14,
  },

//Recipe 2
  {
    id: 18,
    recipe_id: 1,
    quantity_id: 24,
    unit_id: 6,
    ingredient_id: 15,
  },
  {
    id: 19,
    recipe_id: 1,
    quantity_id: 12,
    unit_id: 3,
    ingredient_id: 16,
  },
  {
    id: 20,
    recipe_id: 1,
    quantity_id: 6,
    unit_id: 6,
    ingredient_id: 17,
  },
  {
    id: 21,
    recipe_id: 1,
    quantity_id: 12,
    unit_id: 6,
    ingredient_id: 18,
  },
  {
    id: 22,
    recipe_id: 1,
    quantity_id: 6,
    unit_id: 7,
    ingredient_id: 19,
  },
  {
    id: 23,
    recipe_id: 1,
    quantity_id: 24,
    unit_id: 3,
    ingredient_id: 20,
  },
  {
    id: 24,
    recipe_id: 1,
    quantity_id: 12,
    unit_id: 1,
    ingredient_id: 21,
  },
  {
    id: 25,
    recipe_id: 1,
    quantity_id: 18,
    unit_id: 1,
    ingredient_id: 22,
  },
  {
    id: 26,
    recipe_id: 1,
    quantity_id: 24,
    unit_id: 4,
    ingredient_id: 28,
  },
  {
    id: 27,
    recipe_id: 1,
    quantity_id: 6,
    unit_id: 8,
    ingredient_id: 23,
  },
  {
    id: 28,
    recipe_id: 1,
    quantity_id: 3,
    unit_id: 1,
    ingredient_id: 24,
  },
  {
    id: 29,
    recipe_id: 1,
    quantity_id: 3,
    unit_id: 1,
    ingredient_id: 25,
  },
  {
    id: 30,
    recipe_id: 1,
    quantity_id: 3,
    unit_id: 1,
    ingredient_id: 26,
  },
  {
    id: 31,
    recipe_id: 1,
    quantity_id: 18,
    unit_id: 6,
    ingredient_id: 27,
  },


  //Recipe 3
  {
    id: 32,
    recipe_id: 3,
    quantity_id: 12,
    unit_id: 7,
    ingredient_id: 29,
  },
  {
    id: 33,
    recipe_id: 3,
    quantity_id: 18,
    unit_id: 3,
    ingredient_id: 30,
  },
  {
    id: 34,
    recipe_id: 3,
    quantity_id: 18,
    unit_id: 3,
    ingredient_id: 31,
  },
  {
    id: 35,
    recipe_id: 3,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 32,
  },
  {
    id: 36,
    recipe_id: 3,
    quantity_id: 12,
    unit_id: 2,
    ingredient_id: 33,
  },
  {
    id: 37,
    recipe_id: 3,
    quantity_id: 6,
    unit_id: 1,
    ingredient_id: 34,
  },
  {
    id: 38,
    recipe_id: 3,
    quantity_id: 36,
    unit_id: 3,
    ingredient_id: 16,
  },
  {
    id: 39,
    recipe_id: 3,
    quantity_id: 12,
    unit_id: 6,
    ingredient_id: 35,
  },
  {
    id: 40,
    recipe_id: 3,
    quantity_id: 24,
    unit_id: 6,
    ingredient_id: 18,
  },
  {
    id: 41,
    recipe_id: 3,
    quantity_id: 18,
    unit_id: 3,
    ingredient_id: 20,
  },
  {
    id: 42,
    recipe_id: 3,
    quantity_id: 12,
    unit_id: 1,
    ingredient_id: 19,
  },
  {
    id: 43,
    recipe_id: 3,
    quantity_id: 12,
    unit_id: 6,
    ingredient_id: 36,
  },
  {
    id: 44,
    recipe_id: 3,
    quantity_id: 48,
    unit_id: 4,
    ingredient_id: 37,
  },

  //Recipe 4
  {
    id: 45,
    recipe_id: 4,
    quantity_id: 49,
    unit_id: 6,
    ingredient_id: 38,
  },
  {
    id: 46,
    recipe_id: 4,
    quantity_id: 12,
    unit_id: 1,
    ingredient_id: 39,
  },
  {
    id: 47,
    recipe_id: 4,
    quantity_id: 5,
    unit_id: 1,
    ingredient_id: 40,
  },
  {
    id: 48,
    recipe_id: 4,
    quantity_id: 2,
    unit_id: 1,
    ingredient_id: 41,
  },
  {
    id: 49,
    recipe_id: 4,
    quantity_id: 9,
    unit_id: 7,
    ingredient_id: 42,
  },
  {
    id: 50,
    recipe_id: 4,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 43,
  },

  //recipe 5
  {
    id: 51,
    recipe_id: 5,
    quantity_id: 6,
    unit_id: 1,
    ingredient_id: 44,
  },
  {
    id: 52,
    recipe_id: 5,
    quantity_id: 6,
    unit_id: 1,
    ingredient_id: 21,
  },
  {
    id: 53,
    recipe_id: 5,
    quantity_id: 3,
    unit_id: 3,
    ingredient_id: 45,
  },
  {
    id: 54,
    recipe_id: 5,
    quantity_id: 6,
    unit_id: 6,
    ingredient_id: 27,
  },
  {
    id: 55,
    recipe_id: 5,
    quantity_id: 2,
    unit_id: 1,
    ingredient_id: 6,
  },
  {
    id: 56,
    recipe_id: 5,
    quantity_id: 12,
    unit_id: 3,
    ingredient_id: 46,
  },
  {
    id: 57,
    recipe_id: 5,
    quantity_id: 1,
    unit_id: 1,
    ingredient_id: 47,
  },
  {
    id: 58,
    recipe_id: 5,
    quantity_id: 6,
    unit_id: 2,
    ingredient_id: 48,
  },
  {
    id: 59,
    recipe_id: 5,
    quantity_id: 6,
    unit_id: 8,
    ingredient_id: 7,
  },
  {
    id: 60,
    recipe_id: 5,
    quantity_id: 6,
    unit_id: 8,
    ingredient_id: 9,
  },


  //Recipe 6
  {
    id: 61,
    recipe_id: 6,
    quantity_id: 6,
    unit_id: 1,
    ingredient_id: 6,
  },
  {
    id: 62,
    recipe_id: 6,
    quantity_id: 12,
    unit_id: 2,
    ingredient_id: 10,
  },
  {
    id: 63,
    recipe_id: 6,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 49,
  },
  {
    id: 64,
    recipe_id: 6,
    quantity_id: 5,
    unit_id: 2,
    ingredient_id: 7,
  },
  {
    id: 65,
    recipe_id: 6,
    quantity_id: 18,
    unit_id: 3,
    ingredient_id: 50,
  },
  {
    id: 66,
    recipe_id: 6,
    quantity_id: 5,
    unit_id: 1,
    ingredient_id: 51,
  },

  //Recipe 7
  {
    id: 67,
    recipe_id: 7,
    quantity_id: 12,
    unit_id: 1,
    ingredient_id: 52,
  },
  {
    id: 68,
    recipe_id: 7,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 48,
  },
  {
    id: 69,
    recipe_id: 7,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 53,
  },
  {
    id: 70,
    recipe_id: 7,
    quantity_id: 12,
    unit_id: 6,
    ingredient_id: 18,
  },
  {
    id: 71,
    recipe_id: 7,
    quantity_id: 5,
    unit_id: 2,
    ingredient_id: 7,
  },
  {
    id: 72,
    recipe_id: 7,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 54,
  },
  {
    id: 73,
    recipe_id: 7,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 55,
  },
  {
    id: 74,
    recipe_id: 7,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 56,
  },
  {
    id: 75,
    recipe_id: 7,
    quantity_id: 12,
    unit_id: 1,
    ingredient_id: 57,
  },

  //recipe 8
  {
    id: 76,
    recipe_id: 8,
    quantity_id: 21,
    unit_id: 1,
    ingredient_id: 58,
  },
  {
    id: 77,
    recipe_id: 8,
    quantity_id: 5,
    unit_id: 1,
    ingredient_id: 59,
  },
  {
    id: 78,
    recipe_id: 8,
    quantity_id: 1,
    unit_id: 1,
    ingredient_id: 60,
  },
  {
    id: 79,
    recipe_id: 8,
    quantity_id: 12,
    unit_id: 6,
    ingredient_id: 18,
  },
  {
    id: 80,
    recipe_id: 8,
    quantity_id: 1,
    unit_id: 1,
    ingredient_id: 34,
  },
  {
    id: 81,
    recipe_id: 8,
    quantity_id: 6,
    unit_id: 1,
    ingredient_id: 61,
  },
  {
    id: 82,
    recipe_id: 8,
    quantity_id: 3,
    unit_id: 1,
    ingredient_id: 62,
  },
  {
    id: 83,
    recipe_id: 8,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 63,
  },
  {
    id: 84,
    recipe_id: 8,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 64,
  },
  {
    id: 85,
    recipe_id: 8,
    quantity_id: 6,
    unit_id: 2,
    ingredient_id: 7,
  },

  //Recipe 9
  {
    id: 86,
    recipe_id: 9,
    quantity_id: 50,
    unit_id: 4,
    ingredient_id: 65,
  },
  {
    id: 87,
    recipe_id: 9,
    quantity_id: 1,
    unit_id: 1,
    ingredient_id: 63,
  },
  {
    id: 88,
    recipe_id: 9,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 30,
  },
  {
    id: 89,
    recipe_id: 9,
    quantity_id: 12,
    unit_id: 6,
    ingredient_id: 18,
  },
  {
    id: 90,
    recipe_id: 9,
    quantity_id: 1,
    unit_id: 2,
    ingredient_id: 23,
  },
  {
    id: 91,
    recipe_id: 9,
    quantity_id: 6,
    unit_id: 6,
    ingredient_id: 66,
  },
  {
    id: 92,
    recipe_id: 9,
    quantity_id: 24,
    unit_id: 3,
    ingredient_id: 67,
  },
  {
    id: 93,
    recipe_id: 9,
    quantity_id: 48,
    unit_id: 4,
    ingredient_id: 68,
  },
  {
    id: 94,
    recipe_id: 9,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 69,
  },

  //Recipe 10
  {
    id: 95,
    recipe_id: 10,
    quantity_id: 6,
    unit_id: 7,
    ingredient_id: 70,
  },
  {
    id: 96,
    recipe_id: 10,
    quantity_id: 18,
    unit_id: 7,
    ingredient_id: 71,
  },
  {
    id: 97,
    recipe_id: 10,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 6,
  },
  {
    id: 98,
    recipe_id: 10,
    quantity_id: 12,
    unit_id: 1,
    ingredient_id: 60,
  },
  {
    id: 99,
    recipe_id: 10,
    quantity_id: 24,
    unit_id: 1,
    ingredient_id: 72,
  },
  {
    id: 100,
    recipe_id: 10,
    quantity_id: 3,
    unit_id: 2,
    ingredient_id: 7,
  },
  {
    id: 101,
    recipe_id: 10,
    quantity_id: 12,
    unit_id: 1,
    ingredient_id: 1,
  },
  {
    id: 102,
    recipe_id: 10,
    quantity_id: 2,
    unit_id: 1,
    ingredient_id: 73,
  },
  {
    id: 103,
    recipe_id: 10,
    quantity_id: 6,
    unit_id: 7,
    ingredient_id: 74,
  },
  {
    id: 104,
    recipe_id: 10,
    quantity_id: 6,
    unit_id: 8,
    ingredient_id: 75,
  },
];

const seedIngredientsAll = () => IngredientsAll.bulkCreate(ingredientsAllData);

module.exports = seedIngredientsAll;
