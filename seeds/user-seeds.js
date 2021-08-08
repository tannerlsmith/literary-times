const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'tlsmith',
    email: 'tannerlucassmith@gmail.com',
    password: 'password123'
  },
  {
    username: 'Edgar Allan Poe',
    email: 'eap@gmail.com',
    password: 'password123'
  },
  {
    username: 'Chuck Palahniuk',
    email: 'fightclubauthor@gmail.com',
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;