'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reports', [
      {
        id: 1,
        title: 'Annual Sales Report',
        description: 'This report provides an overview of the sales performance for the year.',
        status: 1,
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        title: 'Quarterly Marketing Analysis',
        description: 'A detailed analysis of the marketing campaigns for Q1 2023.',
        status: 1,
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        title: 'Customer Feedback Report',
        description: 'An aggregation of customer feedback collected during Q4 2023.',
        status: 1,
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        title: 'Financial Overview',
        description: 'A comprehensive report on the company’s financial performance for Q1 2023.',
        status: 1,
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        title: 'Employee Satisfaction Report',
        description: 'A report based on the annual employee satisfaction survey.',
        status: 1,
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Revert seed: Deletes all data from the Reports table
    return queryInterface.bulkDelete('Reports', null, {});
  }
};
