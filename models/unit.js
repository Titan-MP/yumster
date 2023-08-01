const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Unit extends Model {}

Unit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    unit_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'unit',
  }
);

module.exports = Unit;
