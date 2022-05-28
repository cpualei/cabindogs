'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookings = sequelize.define('Bookings', {
    userId: DataTypes.INTEGER,
    listingId: DataTypes.INTEGER,
    totalCost: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {});
  Bookings.associate = function(models) {
    // associations can be defined here
  };
  return Bookings;
};