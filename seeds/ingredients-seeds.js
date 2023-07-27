const { Ingredients } = require('../models');

const ingredientData = [
  //0-10
  {
    ingredient_name: 'warm milk',
  },
  {
    ingredient_name: 'active dry yeast',
  },
  {
    ingredient_name: 'brown sugar',
  },
  {
    ingredient_name: 'salted butter (room temperature)',
  },
  {
    ingredient_name: 'eggs',
  },
  {
    ingredient_name: 'all-purpose flour',
  },
  {
    ingredient_name: 'salt',
  },
  {
    ingredient_name: 'vanilla bean powder',
  },
  {
    ingredient_name: 'granulated sugar',
  },
  {
    ingredient_name: 'cinnamon',
  },

  //11-20
  {
    ingredient_name: 'cream cheese (room temperature)',
  },
  {
    ingredient_name: 'caramel sauce',
  },
  {
    ingredient_name: 'powdered sugar',
  },
  {
    ingredient_name: 'vanilla extract',
  },
  {
    ingredient_name: 'slices of bacon',
  },
  {
    ingredient_name: 'salted butter',
  },
  {
    ingredient_name: 'yellow onion, chopped',
  },
  {
    ingredient_name: 'cloves of garlic, chopped',
  },
  {
    ingredient_name: 'orzo pasta',
  },
  {
    ingredient_name: 'thyme',
  },

  //21-30
  {
    ingredient_name: 'corn',
  },
  {
    ingredient_name: 'chicken broth',
  },
  {
    ingredient_name: 'salt and pepper',
  },
  {
    ingredient_name: 'whole milk',
  },
  {
    ingredient_name: 'cheddar cheese (grated)',
  },
  {
    ingredient_name: 'parmesan cheese (grated)',
  },
  {
    ingredient_name: 'green onions (chopped)',
  },
  {
    ingredient_name: 'diced green chilies',
  },
  {
    ingredient_name: 'chicken breasts',
  },
  {
    ingredient_name: 'olive oil',
  },

  //31-40 
  {
    ingredient_name: 'italian seasoning',
  },
  {
    ingredient_name: 'dijon mustard',
  },
  {
    ingredient_name: 'honey',
  },
  {
    ingredient_name: 'dry white wine (Pinot Grigio)',
  },
  {
    ingredient_name: 'shallots, chopped',
  },
  {
    ingredient_name: 'zucchini, thinly sliced',
  },
  {
    ingredient_name: 'mozzarella cheese',
  },
  {
    ingredient_name: 'medjool dates, split and pitted',
  },
  {
    ingredient_name: 'vanilla ice cream',
  },
  {
    ingredient_name: 'creamy peanut butter',
  },

  //41-50
  {
    ingredient_name: 'roasted peanuts, chopped',
  },
  {
    ingredient_name: 'semi-sweet chocolate chips',
  },
  {
    ingredient_name: 'coconut oil',
  },
  {
    ingredient_name: 'vegan kimchi',
  },
  {
    ingredient_name: 'gochujang',
  },
  {
    ingredient_name: 'cornstarch',
  },
  {
    ingredient_name: 'kimchi juice',
  },
  {
    ingredient_name: 'sesame oil',
  },
  {
    ingredient_name: '',
  },
  {
    ingredient_name: '',
  },


];

const seedIngredients = () => Ingredients.bulkCreate(ingredientData);

module.exports = seedIngredients;
