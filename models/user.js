const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// User Model Definition
const User = sequelize.define('User', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    userName: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    userEmail: {
        allowNull: false,
        unique:true,
        type: DataTypes.STRING,
    },
    userPassword: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    roleId: {
        allowNull: false,
        type: DataTypes.INTEGER,
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
    tableName: 'Users'
});

// Define the association inside the model file or after all models are defined
User.associate = (models) => {
  User.belongsTo(models.Role, {
    foreignKey: 'roleId'
  });
};

module.exports = User;
