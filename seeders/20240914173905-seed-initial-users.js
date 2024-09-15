'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        userName: 'IntellectAds Admin',
        userEmail: 'admin@gmail.com',
        userPassword: '7fa9402d52982a02c3bd36e848a4850e',
        roleId: 1,
        status: 1,
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        userName: 'IntellectAds Manager',
        userEmail: 'manager@gmail.com',
        userPassword: '7fa9402d52982a02c3bd36e848a4850e',
        roleId: 2,
        status: 1,
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        userName: 'IntellectAds User',
        userEmail: 'user@gmail.com',
        userPassword: '7fa9402d52982a02c3bd36e848a4850e',
        roleId: 3,
        status: 1,
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Revert seed: Deletes all data from the Users table
    return queryInterface.bulkDelete('Users', null, {});
  }
};
