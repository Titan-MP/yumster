const { Unit } = require('../models');

const unitData = [
  {
    unit_name: 'C.',
  },
  {
    unit_name: 'tsp.',
  },
  {
    unit_name: 'Tbsp.',
  },
  {
    unit_name: 'oz.',
  },
  {
    unit_name: 'gm.',
  },
  {
    unit_name: ' ',
  },
  {
    unit_name: 'lbs.',
  },
  {
    unit_name: 'pinch',
  },
];

const seedUnit = () => Unit.bulkCreate(unitData);

module.exports = seedUnit;
