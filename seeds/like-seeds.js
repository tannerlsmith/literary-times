const { Like } = require('../models');

const likedata = [
  {
    user_id: 3,
    post_id: 3
  },
  {
    user_id: 2,
    post_id: 2
  },
  {
    user_id: 1,
    post_id: 1
  },
];

const seedLikes = () => Like.bulkCreate(likedata);

module.exports = seedLikes;