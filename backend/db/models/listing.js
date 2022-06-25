'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' }
    },
    name: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(35),
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
    },
    img5: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {});
  Listing.associate = function(models) {
    Listing.hasMany(models.Booking, { foreignKey: 'listingId', onDelete: 'CASCADE', hooks: true });
    Listing.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Listing;
};
