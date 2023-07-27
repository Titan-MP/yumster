const { Category } = require('../models');

const categoryData = [
  {
    name: 'Breakfast',
  },
  {
    name: 'Lunch',
  },
  {
    name: 'Dinner',
  },
  {
    name: 'Snacks',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
