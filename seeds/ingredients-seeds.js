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
    ingredient_name: 'baking powder',
  },
  {
    ingredient_name: 'maple syrup',
  },

  //51-60
  {
    ingredient_name: 'water, room temperature',
  },
  {
    ingredient_name: 'leftover rice',
  },
  {
    ingredient_name: 'scallions, chopped',
  },
  {
    ingredient_name: 'soy sauce',
  },
  {
    ingredient_name: 'curry powder',
  },
  {
    ingredient_name: 'sesame seeds',
  },
  {
    ingredient_name: 'mixed vegetables',
  },
  {
    ingredient_name: 'vegetable broth',
  },
  {
    ingredient_name: 'arborio rice',
  },
  {
    ingredient_name: 'white onion, chopped',
  },

  //61-70
  {
    ingredient_name: 'tomatoes, chopped',
  },
  {
    ingredient_name: 'sundried tomatoes',
  },
  {
    ingredient_name: 'basil, chopped',
  },
  {
    ingredient_name: 'tomato paste',
  },
  {
    ingredient_name: 'cherry tomatoes, halved',
  },
  {
    ingredient_name: 'store bought pizza crust',
  },
  {
    ingredient_name: 'basil pesto',
  },
  {
    ingredient_name: 'mozzarella pearls',
  },
  {
    ingredient_name: 'balsamic glaze',
  },
  {
    ingredient_name: 'bacon, chopped',
  },

  //71-75
  {
    ingredient_name: 'potatoes, peeled and diced',
  },
  {
    ingredient_name: 'chicken stock',
  },
  {
    ingredient_name: 'heavy cream',
  },
  {
    ingredient_name: 'Velveeta cheese',
  },
  {
    ingredient_name: 'pepper',
  },
];

const seedIngredients = () => Ingredients.bulkCreate(ingredientData);

module.exports = seedIngredients;
