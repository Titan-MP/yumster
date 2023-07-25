const sequelize = require('../config/connection');
const seedRecipe = require('./recipeData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedRecipe();

  process.exit(0);
};

seedAll();
