const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Entry extends Model {}

// create fields/columns for User model
Entry.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
      
      
    },

  date: {
    type: "TIMESTAMP",
    defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    allowNull: false,
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'entry'
  }
);

module.exports = Entry;
