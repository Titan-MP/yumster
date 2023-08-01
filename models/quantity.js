const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Quantity extends Model {}

Quantity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'quantity',
  }
);

module.exports = Quantity;
