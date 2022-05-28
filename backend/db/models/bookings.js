'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookings = sequelize.define('Bookings', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' }
    },
    listingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Listings' }
    },
    totalCost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {});
  Bookings.associate = function(models) {
    // associations can be defined here
  };
  return Bookings;
};
