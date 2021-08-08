const { Post } = require('../models');

const postdata = [
  {
    title: 'How I write my poems.',
    post_url: 'https://google.com',
    user_id: 1
  },
  {
    title: 'Welcome to the site.',
    post_url: 'https://google.com',
    user_id: 3
  },
  {
    title: 'Why I quit attending fight club.',
    post_url: 'https://google.com',
    user_id: 2
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;