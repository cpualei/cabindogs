"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Bookings",
      [
        {
          userId: 1,
          listingId: 2,
          totalCost: 500,
          startDate: new Date(),
          endDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          listingId: 4,
          totalCost: 700,
          startDate: new Date(),
          endDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          listingId: 3,
          totalCost: 600,
          startDate: new Date(),
          endDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          listingId: 1,
          totalCost: 800,
          startDate: new Date(),
          endDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Bookings", null, {});
  },
};
