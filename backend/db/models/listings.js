'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listings = sequelize.define('Listings', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    img1: DataTypes.STRING,
    img2: DataTypes.STRING,
    img3: DataTypes.STRING,
    img4: DataTypes.STRING
  }, {});
  Listings.associate = function(models) {
    // associations can be defined here
  };
  return Listings;
};