// Import Models
const Category = require('./category');
const Ingredients = require('./ingredients');
const IngredientsAll = require('./ingredientsAll');
const Quantity = require('./quantity');
const Recipe = require('./recipe');
const Unit = require('./unit');
const User = require('./user');
const Comment = require('./comment');

// One to many relationship btwn category and recipies
Recipe.belongsTo(Category,{
    foreignKey: 'category_id'
});

Category.hasMany(Recipe, {
    foreignKey: 'category_id'
});

Comment.belongsTo(Recipe,{
    foreignKey: 'recipe_id'
});
Recipe.hasMany(Comment,{
    foreignKey: 'recipe_id'
});


//many to many relationships through IngredientsAll model
// Recipe.hasMany(IngredientsAll);


Ingredients.belongsToMany(Recipe, {
    through: {
        model: IngredientsAll,
        foreignKey: 'ingredient_id'
    },
    as: 'ingredients',
});

Unit.belongsToMany(Recipe, {
    through: {
        model: IngredientsAll,
        foreignKey: 'unit_id'
    },
    as: 'units',
});

Quantity.belongsToMany(Recipe, {
    through: {
        model: IngredientsAll,
        foreignKey: 'quantity_id'
    },
    as: 'quantities',
});

module.exports = {
    Category,
    Ingredients,
    IngredientsAll,
    Quantity,
    Recipe,
    Unit,
    User,
   Comment,
};
