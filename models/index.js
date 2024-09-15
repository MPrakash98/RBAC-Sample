const { sequelize } = require('../config/database');
const Report = require('./report');
const User = require('./user');
const Role = require('./role');
const Permission = require('./permission');

// Initialize models
const models = {
  Report,
  User,
  Role,
  Permission
};

// Establish associations
Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

module.exports = models;
