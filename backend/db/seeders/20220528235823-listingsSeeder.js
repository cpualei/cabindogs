'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Listings', [
      {
        userId: 1,
        name: 'Hummingbird Ranch',
        state: 'Arizona',
        country: 'USA',
        cost: 160,
        img1: 'https://blog.architizer.com/wp-content/uploads/1590962864677Whidbey-Island-Farmhouse_35.jpg',
        img2: 'https://blog.architizer.com/wp-content/uploads/1590962965252Whidbey-Island-Farmhouse_38-1024x717.jpg',
        img3: 'https://www.decorilla.com/online-decorating/wp-content/uploads/2020/09/Light-modern-cabin-interior-living-and-dining-area-4.jpg',
        img4: 'https://media.vrbo.com/lodging/74000000/73070000/73068900/73068883/7527a398.c10.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: 'Dreamy Treehouse',
        state: 'Colorado',
        country: 'USA',
        cost: 170,
        img1: 'https://a0.muscache.com/im/pictures/1a2378e8-88b8-4fc7-b69e-0d1ddf61fe27.jpg?im_w=1440',
        img2: 'https://a0.muscache.com/im/pictures/f34aa0f5-73d9-43ef-9091-10bef196c08a.jpg?im_w=1440',
        img3: 'https://a0.muscache.com/im/pictures/1ca070c6-2d07-4527-8732-e1308b343414.jpg?im_w=1440',
        img4: 'https://a0.muscache.com/im/pictures/47803dc5-9700-482c-94e8-56264d0fa22d.jpg?im_w=1440',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: 'Sugar Bear Cove',
        state: 'Shirley, British Columbia',
        country: 'Canada',
        cost: 230,
        img1: 'https://a0.muscache.com/im/pictures/miso/Hosting-45254853/original/dd66383b-1cd1-4c8a-9a2e-d7bdf38d53b8.jpeg?im_w=1200',
        img2: 'https://a0.muscache.com/im/pictures/miso/Hosting-45254853/original/ec6eba8e-487d-47c8-beb8-501856a74d84.jpeg?im_w=1440',
        img3: 'https://a0.muscache.com/im/pictures/miso/Hosting-45254853/original/bfd01c6d-64ed-48b1-9643-7ce68c6ea8f1.jpeg?im_w=1440',
        img4: 'https://a0.muscache.com/im/pictures/miso/Hosting-45254853/original/395aaa63-b757-419a-9971-16c41b225e81.jpeg?im_w=1440',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: 'Midcentury in the Poconos',
        state: 'Pennsylvania',
        country: 'USA',
        cost: 200,
        img1: 'https://a0.muscache.com/im/pictures/77c897ae-e66b-4b16-8e50-da04b868c3bd.jpg?im_w=1200',
        img2: 'https://a0.muscache.com/im/pictures/7506ed6e-4ba5-4a79-8b03-2a450b9fe17d.jpg?im_w=1440',
        img3: 'https://a0.muscache.com/im/pictures/87db02c0-e636-4a3e-94f2-825f2c3bfb32.jpg?im_w=1440',
        img4: 'https://a0.muscache.com/im/pictures/3dd1496d-e2d5-4b56-9a86-15b366e2cbcf.jpg?im_w=1440',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: 'Treeloft at Basecamp',
        state: 'Missouri',
        country: 'USA',
        cost: 350,
        img1: 'https://a0.muscache.com/im/pictures/56dd4335-57f0-4e32-a823-f00cc2a73589.jpg?im_w=1200',
        img2: 'https://a0.muscache.com/im/pictures/3b8e9fda-1cdb-4d96-bc45-70051eda0249.jpg?im_w=1440',
        img3: 'https://a0.muscache.com/im/pictures/e8a0cd42-8b22-48ac-83ee-33bee67b4534.jpg?im_w=1440',
        img4: 'https://a0.muscache.com/im/pictures/ade80568-ff3a-4f6f-a854-194d8f7c5c02.jpg?im_w=1440',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Listings', null, {});
  }
};
