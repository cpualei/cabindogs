'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Listings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users' }
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING(75)
      },
      cost: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      img1: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      img2: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      img3: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      img4: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      img5: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Listings');
  }
};
