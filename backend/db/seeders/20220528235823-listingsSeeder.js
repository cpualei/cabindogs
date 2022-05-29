'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Listings', [
      {
        userId: '1',
        name: 'Hummingbird Ranch',
        state: 'Arizona',
        country: 'USA',
        cost: '84',
        img1: 'https://blog.architizer.com/wp-content/uploads/1590962864677Whidbey-Island-Farmhouse_35.jpg',
        img2: 'https://blog.architizer.com/wp-content/uploads/1590962965252Whidbey-Island-Farmhouse_38-1024x717.jpg',
        img3: 'https://www.decorilla.com/online-decorating/wp-content/uploads/2020/09/Light-modern-cabin-interior-living-and-dining-area-4.jpg',
        img4: 'https://media.vrbo.com/lodging/74000000/73070000/73068900/73068883/7527a398.c10.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Listings', null, {});
  }
};
