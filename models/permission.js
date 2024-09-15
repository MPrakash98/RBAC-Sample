const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// Report Model Definition
const Permission = sequelize.define('Permission', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  resourceName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  actionName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  actionSlug: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  isDeleted: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: true,
    type: DataTypes.DATE
  },
}, {
  tableName: 'Permission'
});


module.exports = Permission;
