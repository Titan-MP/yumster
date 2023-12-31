const seedCategory = require('./category-seeds');
const seedRecipe = require('./recipe-seeds');
const seedQuantity = require('./quantity-seeds');
const seedUnit = require('./unit-seeds');
const seedIngredients = require('./ingredients-seeds');
const seedIngredientsAll = require('./ingredientsAll-seeds');
// const seedComment = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCategory();
  console.log('\n----- CATEGORY SEEDED -----\n');

  await seedRecipe();
  console.log('\n----- RECIPE SEEDED -----\n');

  await seedQuantity();
  console.log('\n----- QUANTITY SEEDED -----\n');

  await seedUnit();
  console.log('\n----- UNIT SEEDED -----\n');

  await seedIngredients();
  console.log('\n----- INGREDIENTS SEEDED -----\n');

  await seedIngredientsAll();
  console.log('\n----- INGREDIENTS ALL SEEDED -----\n');

  // await seedComment();
  // console.log('\n----- COMMENTS ALL SEEDED -----\n');

  process.exit(0);
};

seedAll();
