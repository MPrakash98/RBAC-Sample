'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [
      {
        id: 1,
        roleName: 'Super Admin',
        rules: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        status: 1,
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        roleName: 'Manager',
        rules: [9, 10, 11, 12],
        status: 1,
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        roleName: 'User',
        rules: [9],
        status: 1,
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Revert seed: Deletes all data from the Roles table
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
