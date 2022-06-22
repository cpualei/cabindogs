'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
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
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.Listing, { foreignKey: 'listingId' });
    Booking.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Booking;
};
