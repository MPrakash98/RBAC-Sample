const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// Role Model Definition
const Role = sequelize.define('Role', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    roleName: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    rules: {
        allowNull: true,
        type: DataTypes.ARRAY(DataTypes.INTEGER),
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
    tableName: 'Roles'
});


module.exports = Role;
