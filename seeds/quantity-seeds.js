const { Quantity } = require('../models');

const quantityData = [
  {
    id: 1,
    amount: '0.25',
  },
  {
    id: 2,
    amount: '0.33',
  },
  {
    id: 3,
    amount: '0.50',
  },
  {
    id: 4,
    amount: '0.66',
  },
  {
    id: 5,
    amount: '0.75',
  },
  {
    id: 6,
    amount: '1',
  },
  {
    id: 7,
    amount: '1.25',
  },
  {
    id: 8,
    amount: '1.33',
  },
  {
    id: 9,
    amount: '1.50',
  },
  {
    id: 10,
    amount: '1.66',
  },
  {
    id: 11,
    amount: '1.75',
  },
  {
    id: 12,
    amount: '2',
  },
  {
    id: 13,
    amount: '2.25',
  },
  {
    id: 14,
    amount: '2.33',
  },
  {
    id: 15,
    amount: '2.50',
  },
  {
    id: 16,
    amount: '2.66',
  },
  {
    id: 17,
    amount: '2.75',
  },
  {
    id: 18,
    amount: '3',
  },
  {
    id: 19,
    amount: '3.25',
  },
  {
    id: 20,
    amount: '3.33',
  },
  {
    id: 21,
    amount: '3.50',
  },
  {
    id: 22,
    amount: '3.66',
  },
  {
    id: 23,
    amount: '3.75',
  },
  {
    id: 24,
    amount: '4',
  },
  {
    id: 25,
    amount: '4.25',
  },
  {
    id: 26,
    amount: '4.33',
  },
  {
    id: 27,
    amount: '4.50',
  },
  {
    id: 28,
    amount: '4.66',
  },
  {
    id: 29,
    amount: '4.75',
  },
  {
    id: 30,
    amount: '5',
  },
  {
    id: 31,
    amount: '5.25',
  },
  {
    id: 32,
    amount: '5.33',
  },
  {
    id: 33,
    amount: '5.50',
  },
  {
    id: 34,
    amount: '5.66',
  },
  {
    id: 35,
    amount: '5.75',
  },
  {
    id: 36,
    amount: '6',
  },
  {
    id: 37,
    amount: '6.25',
  },
  {
    id: 38,
    amount: '6.33',
  },
  {
    id: 39,
    amount: '6.50',
  },
  {
    id: 40,
    amount: '6.66',
  },
  {
    id: 41,
    amount: '6.75',
  },
  {
    id: 42,
    amount: '7',
  },
  {
    id: 43,
    amount: '7.25',
  },
  {
    id: 44,
    amount: '7.33',
  },
  {
    id: 45,
    amount: '7.50',
  },
  {
    id: 46,
    amount: '7.66',
  },
  {
    id: 47,
    amount: '7.75',
  },
  {
    id: 48,
    amount: '8',
  },
  {
    id: 49,
    amount: '22',
  },
  {
    id: 50,
    amount: '12',
  },
];

const seedQuantity = () => Quantity.bulkCreate(quantityData);

module.exports = seedQuantity;
