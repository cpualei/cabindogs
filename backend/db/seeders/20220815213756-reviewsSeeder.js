'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews',
      [
        {
        userId: 2,
        listingId: 1,
        review: 'Thanks to this pet-friendly cabin, my dog was able to join us on our family vacation. We most definitely recommend this cabin, 11/10!'
        },
        {
        userId: 1,
        listingId: 1,
        review: 'What a fantastic home.'
        },
        {
        userId: 3,
        listingId: 1,
        review: 'Thank you for your reviews!'
        },
        {
        userId: 1,
        listingId: 2,
        review: 'Not worth the money! Bathrooms were filthy.'
        },
        {
        userId: 3,
        listingId: 2,
        review: 'Not worth the money! Bathrooms were filthy.'
        },
        {
        userId: 1,
        listingId: 5,
        review: 'The best pet-friendly cabin to stay at in Mexico.'
        },
        {
        userId: 2,
        listingId: 5,
        review: 'I 100 percent agree!'
        },
        {
        userId: 3,
        listingId: 5,
        review: 'Thank you for your support!.'
        },
        {
        userId: 3,
        listingId: 6,
        review: 'Wow. This place was gorgeous! Coolest treeloft I have ever seen.'
        },
        {
        userId: 2,
        listingId: 8,
        review: 'Best cabin in the best country.'
        },
        {
        userId: 1,
        listingId: 8,
        review: 'My dog loved this cabin!! We will be back!'
        },
        {
        userId: 2,
        listingId: 9,
        review: 'Very very beautiful and modern cabin. So beautiful I was surprised it was pet-friendly.'
        },
        {
        userId: 2,
        listingId: 12,
        review: 'Such a cozy place. My pet felt right at home!'
        },
        {
        userId: 3,
        listingId: 12,
        review: 'I am glad our cabin was to your liking! Thank you for your review.'
        },

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reviews", null, {});
  }
};
