const { Unit } = require('../models');

const unitData = [
  {
    id: 1,
    unit_name: 'C.',
  },
  {
    id: 2,
    unit_name: 'tsp.',
  },
  {
    id: 3,
    unit_name: 'Tbsp.',
  },
  {
    id: 4,
    unit_name: 'oz.',
  },
  {
    id: 5,
    unit_name: 'gm.',
  },
  {
    id: 6,
    unit_name: ' ',
  },
  {
    id: 7,
    unit_name: 'lbs.',
  },
  {
    id: 8,
    unit_name: 'pinch',
  },
];

const seedUnit = () => Unit.bulkCreate(unitData);

module.exports = seedUnit;
