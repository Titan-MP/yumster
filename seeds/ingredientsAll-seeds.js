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

  //Recipe 4
  {
    recipe_id: 4,
    quantity_id: 49,
    unit_id: 6,
    ingredient_id: 38,
  },
  {
    recipe_id: 4,
    quantity_id: 12,
    unit_id: 1,
    ingredient_id: 39,
  },
  {
    recipe_id: 4,
    quantity_id: 5,
    unit_id: 1,
    ingredient_id: 40,
  },
  {
    recipe_id: 4,
    quantity_id: 2,
    unit_id: 1,
    ingredient_id: 41,
  },
  {
    recipe_id: 4,
    quantity_id: 9,
    unit_id: 7,
    ingredient_id: 42,
  },
  {
    recipe_id: 4,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 43,
  },

  //recipe 5
  {
    recipe_id: 5,
    quantity_id: 6,
    unit_id: 1,
    ingredient_id: 44,
  },
  {
    recipe_id: 5,
    quantity_id: 6,
    unit_id: 1,
    ingredient_id: 21,
  },
  {
    recipe_id: 5,
    quantity_id: 3,
    unit_id: 3,
    ingredient_id: 45,
  },
  {
    recipe_id: 5,
    quantity_id: 6,
    unit_id: 6,
    ingredient_id: 27,
  },
  {
    recipe_id: 5,
    quantity_id: 2,
    unit_id: 1,
    ingredient_id: 6,
  },
  {
    recipe_id: 5,
    quantity_id: 12,
    unit_id: 3,
    ingredient_id: 46,
  },
  {
    recipe_id: 5,
    quantity_id: 1,
    unit_id: 1,
    ingredient_id: 47,
  },
  {
    recipe_id: 5,
    quantity_id: 6,
    unit_id: 2,
    ingredient_id: 48,
  },
  {
    recipe_id: 5,
    quantity_id: 6,
    unit_id: 8,
    ingredient_id: 7,
  },
  {
    recipe_id: 5,
    quantity_id: 6,
    unit_id: 8,
    ingredient_id: 9,
  },


  //Recipe 6
  {
    recipe_id: 6,
    quantity_id: 6,
    unit_id: 1,
    ingredient_id: 6,
  },
  {
    recipe_id: 6,
    quantity_id: 12,
    unit_id: 2,
    ingredient_id: 10,
  },
  {
    recipe_id: 6,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 49,
  },
  {
    recipe_id: 6,
    quantity_id: 5,
    unit_id: 2,
    ingredient_id: 7,
  },
  {
    recipe_id: 6,
    quantity_id: 18,
    unit_id: 3,
    ingredient_id: 50,
  },
  {
    recipe_id: 6,
    quantity_id: 5,
    unit_id: 1,
    ingredient_id: 51,
  },

  //Recipe 7
  {
    recipe_id: 7,
    quantity_id: 12,
    unit_id: 1,
    ingredient_id: 52,
  },
  {
    recipe_id: 7,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 48,
  },
  {
    recipe_id: 7,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 53,
  },
  {
    recipe_id: 7,
    quantity_id: 12,
    unit_id: 6,
    ingredient_id: 18,
  },
  {
    recipe_id: 7,
    quantity_id: 5,
    unit_id: 2,
    ingredient_id: 7,
  },
  {
    recipe_id: 7,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 54,
  },
  {
    recipe_id: 7,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 55,
  },
  {
    recipe_id: 7,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 56,
  },
  {
    recipe_id: 7,
    quantity_id: 12,
    unit_id: 1,
    ingredient_id: 57,
  },

  //recipe 8
  {
    recipe_id: 8,
    quantity_id: 21,
    unit_id: 1,
    ingredient_id: 58,
  },
  {
    recipe_id: 8,
    quantity_id: 5,
    unit_id: 1,
    ingredient_id: 59,
  },
  {
    recipe_id: 8,
    quantity_id: 1,
    unit_id: 1,
    ingredient_id: 60,
  },
  {
    recipe_id: 8,
    quantity_id: 12,
    unit_id: 6,
    ingredient_id: 18,
  },
  {
    recipe_id: 8,
    quantity_id: 1,
    unit_id: 1,
    ingredient_id: 34,
  },
  {
    recipe_id: 8,
    quantity_id: 6,
    unit_id: 1,
    ingredient_id: 61,
  },
  {
    recipe_id: 8,
    quantity_id: 3,
    unit_id: 1,
    ingredient_id: 62,
  },
  {
    recipe_id: 8,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 63,
  },
  {
    recipe_id: 8,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 64,
  },
  {
    recipe_id: 8,
    quantity_id: 6,
    unit_id: 2,
    ingredient_id: 7,
  },

  //Recipe 9
  {
    recipe_id: 9,
    quantity_id: 50,
    unit_id: 4,
    ingredient_id: 65,
  },
  {
    recipe_id: 9,
    quantity_id: 1,
    unit_id: 1,
    ingredient_id: 63,
  },
  {
    recipe_id: 9,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 30,
  },
  {
    recipe_id: 9,
    quantity_id: 12,
    unit_id: 6,
    ingredient_id: 18,
  },
  {
    recipe_id: 9,
    quantity_id: 1,
    unit_id: 2,
    ingredient_id: 23,
  },
  {
    recipe_id: 9,
    quantity_id: 6,
    unit_id: 6,
    ingredient_id: 66,
  },
  {
    recipe_id: 9,
    quantity_id: 24,
    unit_id: 3,
    ingredient_id: 67,
  },
  {
    recipe_id: 9,
    quantity_id: 48,
    unit_id: 4,
    ingredient_id: 68,
  },
  {
    recipe_id: 9,
    quantity_id: 6,
    unit_id: 3,
    ingredient_id: 69,
  },

  //Recipe 10
  {
    recipe_id: 10,
    quantity_id: ,
    unit_id: ,
    ingredient_id: ,
  },
  {
    recipe_id: 10,
    quantity_id: ,
    unit_id: ,
    ingredient_id: ,
  },
  {
    recipe_id: 10,
    quantity_id: ,
    unit_id: ,
    ingredient_id: ,
  },
  {
    recipe_id: 10,
    quantity_id: ,
    unit_id: ,
    ingredient_id: ,
  },
  {
    recipe_id: 10,
    quantity_id: ,
    unit_id: ,
    ingredient_id: ,
  },
  {
    recipe_id: 10,
    quantity_id: ,
    unit_id: ,
    ingredient_id: ,
  },
  {
    recipe_id: 10,
    quantity_id: ,
    unit_id: ,
    ingredient_id: ,
  },
  {
    recipe_id: 10,
    quantity_id: ,
    unit_id: ,
    ingredient_id: ,
  },
  {
    recipe_id: 10,
    quantity_id: ,
    unit_id: ,
    ingredient_id: ,
  },
  {
    recipe_id: 10,
    quantity_id: ,
    unit_id: ,
    ingredient_id: ,
  },
  {
    recipe_id: 10,
    quantity_id: ,
    unit_id: ,
    ingredient_id: ,
  },
  {
    recipe_id: 10,
    quantity_id: ,
    unit_id: ,
    ingredient_id: ,
  },
];

const seedIngredientsAll = () => IngredientsAll.bulkCreate(ingredientsAllData);

module.exports = seedIngredientsAll;
