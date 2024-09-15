'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Permission', [
      {
        id: 1,
        resourceName: 'Users',
        actionName: 'Read',
        actionSlug: 'read-user',
        status: 1,
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        resourceName: 'Users',
        actionName: 'Create',
        actionSlug: 'create-user',
        status: 1,
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        resourceName: 'Users',
        actionName: 'Update',
        actionSlug: 'update-user',
        status: 1,
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        resourceName: 'Users',
        actionName: 'Delete',
        actionSlug: 'delete-user',
        status: 1,
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        resourceName: 'Roles',
        actionName: 'Read',
        actionSlug: 'read-role',
        status: 1,
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        resourceName: 'Roles',
        actionName: 'Create',
        actionSlug: 'create-role',
        status: 1,
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        resourceName: 'Roles',
        actionName: 'Update',
        actionSlug: 'update-role',
        status: 1,
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        resourceName: 'Roles',
        actionName: 'Delete',
        actionSlug: 'delete-role',
        status: 1,
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        resourceName: 'Reports',
        actionName: 'Read',
        actionSlug: 'read-report',
        status: 1,
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        resourceName: 'Reports',
        actionName: 'Create',
        actionSlug: 'create-report',
        status: 1,
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        resourceName: 'Reports',
        actionName: 'Update',
        actionSlug: 'update-report',
        status: 1,
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        resourceName: 'Reports',
        actionName: 'Delete',
        actionSlug: 'delete-report',
        status: 1,
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Revert seed: Deletes all data from the Permission table
    return queryInterface.bulkDelete('Permission', null, {});
  }
};
