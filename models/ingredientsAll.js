const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class IngredientsAll extends Model {}

IngredientsAll.init(
  {
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'recipe',
        key: 'id',
      },
    },
    quantity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'quantity',
        key: 'id',
      },
    },
    unit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'unit',
        key: 'id',
      },
    },
    ingredient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ingredients',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'ingredientsAll',
  }
);

module.exports = IngredientsAll;
