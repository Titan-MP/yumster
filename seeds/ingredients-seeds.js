const { Ingredients } = require('../models');

const ingredientData = [
  //0-10
  {
    id: 1,
    ingredient_name: 'warm milk',
  },
  {
    id: 2,
    ingredient_name: 'active dry yeast',
  },
  {
    id: 3,
    ingredient_name: 'brown sugar',
  },
  {
    id: 4,
    ingredient_name: 'salted butter (room temperature)',
  },
  {
    id: 5,
    ingredient_name: 'eggs',
  },
  {
    id: 6,
    ingredient_name: 'all-purpose flour',
  },
  {
    id: 7,
    ingredient_name: 'salt',
  },
  {
    id: 8,
    ingredient_name: 'vanilla bean powder',
  },
  {
    id: 9,
    ingredient_name: 'granulated sugar',
  },
  {
    id: 10,
    ingredient_name: 'cinnamon',
  },

  //11-20
  {
    id: 11,
    ingredient_name: 'cream cheese (room temperature)',
  },
  {
    id: 12,
    ingredient_name: 'caramel sauce',
  },
  {
    id: 13,
    ingredient_name: 'powdered sugar',
  },
  {
    id: 14,
    ingredient_name: 'vanilla extract',
  },
  {
    id: 15,
    ingredient_name: 'slices of bacon',
  },
  {
    id: 16,
    ingredient_name: 'salted butter',
  },
  {
    id: 17,
    ingredient_name: 'yellow onion, chopped',
  },
  {
    id: 18,
    ingredient_name: 'cloves of garlic, chopped',
  },
  {
    id: 19,
    ingredient_name: 'orzo pasta',
  },
  {
    id: 20,
    ingredient_name: 'thyme',
  },

  //21-30
  {
    id: 21,
    ingredient_name: 'corn',
  },
  {
    id: 22,
    ingredient_name: 'chicken broth',
  },
  {
    id: 23,
    ingredient_name: 'salt and pepper',
  },
  {
    id: 24,
    ingredient_name: 'whole milk',
  },
  {
    id: 25,
    ingredient_name: 'cheddar cheese (grated)',
  },
  {
    id: 26,
    ingredient_name: 'parmesan cheese (grated)',
  },
  {
    id: 27,
    ingredient_name: 'green onions (chopped)',
  },
  {
    id: 28,
    ingredient_name: 'diced green chilies',
  },
  {
    id: 29,
    ingredient_name: 'chicken breasts',
  },
  {
    id: 30,
    ingredient_name: 'olive oil',
  },

  //31-40 
  {
    id: 31,
    ingredient_name: 'italian seasoning',
  },
  {
    id: 32,
    ingredient_name: 'dijon mustard',
  },
  {
    id: 33,
    ingredient_name: 'honey',
  },
  {
    id: 34,
    ingredient_name: 'dry white wine (Pinot Grigio)',
  },
  {
    id: 35,
    ingredient_name: 'shallots, chopped',
  },
  {
    id: 36,
    ingredient_name: 'zucchini, thinly sliced',
  },
  {
    id: 37,
    ingredient_name: 'mozzarella cheese',
  },
  {
    id: 38,    
    ingredient_name: 'medjool dates, split and pitted',
  },
  {
    id: 39,
    ingredient_name: 'vanilla ice cream',
  },
  {
    id: 40,
    ingredient_name: 'creamy peanut butter',
  },

  //41-50
  {
    id: 41,
    ingredient_name: 'roasted peanuts, chopped',
  },
  {
    id: 42,
    ingredient_name: 'semi-sweet chocolate chips',
  },
  {
    id: 43,
    ingredient_name: 'coconut oil',
  },
  {
    id: 44,
    ingredient_name: 'vegan kimchi',
  },
  {
    id: 45,
    ingredient_name: 'gochujang',
  },
  {
    id: 46,
    ingredient_name: 'cornstarch',
  },
  {
    id: 47,
    ingredient_name: 'kimchi juice',
  },
  {
    id: 48,
    ingredient_name: 'sesame oil',
  },
  {
    id: 49,
    ingredient_name: 'baking powder',
  },
  {
    id: 50,
    ingredient_name: 'maple syrup',
  },

  //51-60
  {
    id: 51,
    ingredient_name: 'water, room temperature',
  },
  {
    id: 52,
    ingredient_name: 'leftover rice',
  },
  {
    id: 53,
    ingredient_name: 'scallions, chopped',
  },
  {
    id: 54,
    ingredient_name: 'soy sauce',
  },
  {
    id: 55,
    ingredient_name: 'curry powder',
  },
  {
    id: 56,
    ingredient_name: 'sesame seeds',
  },
  {
    id: 57,
    ingredient_name: 'mixed vegetables',
  },
  {
    id: 58,
    ingredient_name: 'vegetable broth',
  },
  {
    id: 59,
    ingredient_name: 'arborio rice',
  },
  {
    id: 60,
    ingredient_name: 'white onion, chopped',
  },

  //61-70
  {
    id: 61,
    ingredient_name: 'tomatoes, chopped',
  },
  {
    id: 62,
    ingredient_name: 'sundried tomatoes',
  },
  {
    id: 63,
    ingredient_name: 'basil, chopped',
  },
  {
    id: 64,
    ingredient_name: 'tomato paste',
  },
  {
    id: 65,
    ingredient_name: 'cherry tomatoes, halved',
  },
  {
    id: 66,
    ingredient_name: 'store bought pizza crust',
  },
  {
    id: 67,
    ingredient_name: 'basil pesto',
  },
  {
    id: 68,
    ingredient_name: 'mozzarella pearls',
  },
  {
    id: 69,
    ingredient_name: 'balsamic glaze',
  },
  {
    id: 70,
    ingredient_name: 'bacon, chopped',
  },

  //71-75
  {
    id: 71,
    ingredient_name: 'potatoes, peeled and diced',
  },
  {
    id: 72,
    ingredient_name: 'chicken stock',
  },
  {
    id: 73,
    ingredient_name: 'heavy cream',
  },
  {
    id: 74,
    ingredient_name: 'Velveeta cheese',
  },
  {
    id: 75,
    ingredient_name: 'pepper',
  },
];

const seedIngredients = () => Ingredients.bulkCreate(ingredientData);

module.exports = seedIngredients;
