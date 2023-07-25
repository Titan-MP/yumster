// Import Models
const Ingredients = require('./ingredients');
const IngredientsAll = require('./ingredientsAll');
const Quantity = require('./quantity');
const Recipe = require('./recipe');
const Unit = require('./unit');

//many to many relationships through IngredientsAll model
Recipe.hasMany(IngredientsAll);

Ingredients.belongsToMany(Recipe, {
    through: {
        model: IngredientsAll,
        unique: false,
    },
    as: 'ingredients',
});

Unit.belongsToMany(Recipe, {
    through: {
        model: IngredientsAll,
        unique: false,
    },
    as: 'units',
});

Quantity.belongsToMany(Recipe, {
    through: {
        model: IngredientsAll,
        unique: false,
    },
    as: 'quantities',
});

module.exports = {
    Ingredients,
    IngredientsAll,
    Quantity,
    Recipe,
    Unit,
};
