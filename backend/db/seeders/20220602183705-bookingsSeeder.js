"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Bookings",
      [
        {
          userId: 1,
          listingId: 2,
          startDate: new Date(),
          endDate: new Date(),
          totalPeople: 4,
          totalDogs: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          listingId: 4,
          startDate: new Date(),
          endDate: new Date(),
          totalPeople: 2,
          totalDogs: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          listingId: 3,
          startDate: new Date(),
          endDate: new Date(),
          totalPeople: 5,
          totalDogs: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          listingId: 1,
          startDate: new Date(),
          endDate: new Date(),
          totalPeople: 4,
          totalDogs: 1,
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
