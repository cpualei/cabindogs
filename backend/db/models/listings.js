'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listings = sequelize.define('Listings', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' }
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    img1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    img2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    img3: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    img4: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {});
  Listings.associate = function(models) {
    // associations can be defined here
  };
  return Listings;
};
