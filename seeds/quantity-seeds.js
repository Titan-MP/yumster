const { Quantity } = require('../models');

const quantityData = [
  {
    amount: '0.25',
  },
  {
    amount: '0.33',
  },
  {
    amount: '0.50',
  },
  {
    amount: '0.66',
  },
  {
    amount: '0.75',
  },
  {
    amount: '1',
  },
  {
    amount: '1.25',
  },
  {
    amount: '1.33',
  },
  {
    amount: '1.50',
  },
  {
    amount: '1.66',
  },
  {
    amount: '1.75',
  },
  {
    amount: '2',
  },
  {
    amount: '2.25',
  },
  {
    amount: '2.33',
  },
  {
    amount: '2.50',
  },
  {
    amount: '2.66',
  },
  {
    amount: '2.75',
  },
  {
    amount: '3',
  },
  {
    amount: '3.25',
  },
  {
    amount: '3.33',
  },
  {
    amount: '3.50',
  },
  {
    amount: '3.66',
  },
  {
    amount: '3.75',
  },
  {
    amount: '4',
  },
  {
    amount: '4.25',
  },
  {
    amount: '4.33',
  },
  {
    amount: '4.50',
  },
  {
    amount: '4.66',
  },
  {
    amount: '4.75',
  },
  {
    amount: '5',
  },
  {
    amount: '5.25',
  },
  {
    amount: '5.33',
  },
  {
    amount: '5.50',
  },
  {
    amount: '5.66',
  },
  {
    amount: '5.75',
  },
  {
    amount: '6',
  },
  {
    amount: '6.25',
  },
  {
    amount: '6.33',
  },
  {
    amount: '6.50',
  },
  {
    amount: '6.66',
  },
  {
    amount: '6.75',
  },
  {
    amount: '7',
  },
  {
    amount: '7.25',
  },
  {
    amount: '7.33',
  },
  {
    amount: '7.50',
  },
  {
    amount: '7.66',
  },
  {
    amount: '7.75',
  },
  {
    amount: '8',
  },
  {
    amount: '22',
  },
];

const seedQuantity = () => Quantity.bulkCreate(quantityData);

module.exports = seedQuantity;
