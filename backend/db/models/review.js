'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' }
    },
    listingId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    review: {
      type: DataTypes.STRING(2200),
      allowNull: false
    }
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Listing, { foreignKey: 'listingId' });
    Review.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Review;
};
