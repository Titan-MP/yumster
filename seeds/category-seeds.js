const { Category } = require('../models');

const categoryData = [
  {
    id: 1,
    name: 'Breakfast',
  },
  {
    id: 2,
    name: 'Lunch',
  },
  {
    id: 3,
    name: 'Dinner',
  },
  {
    id: 4,
    name: 'Snacks',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
