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
Recipe.belongsTo(Category);

Category.hasMany(Recipe);

Comment.belongsTo(Recipe,{
    foreignKey: 'recipe_id'
});
Recipe.hasMany(Comment,{
    foreignKey: 'recipe_id'
});


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
    Category,
    Ingredients,
    IngredientsAll,
    Quantity,
    Recipe,
    Unit,
    User,
    Comment,
};
